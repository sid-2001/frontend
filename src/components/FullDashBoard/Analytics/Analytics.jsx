/*
This file consist the Analytics Page
*/

// All the dependecies and components
import React , { useContext ,useEffect,useState } from 'react'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './Analytics.module.scss';
import { AreaChart, Area, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Context for sidebar collapse state
import { SideBarContext } from '../../../Contexts/SideBarContext';

// Images
import downloadIcon from './AnalyticsIcons/downloadIcon.png';
import chevronDownIcon from './AnalyticsIcons/chevronDownIcon.png';
import homeIcon from './AnalyticsIcons/homeIcon.png';
import buildingIcon from './AnalyticsIcons/buildingIcon.png';
import communityIcon from './AnalyticsIcons/communityIcon.png';
import calendarIcon from './AnalyticsIcons/calendar-2-fill.png';

// Graphql API
import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../../../graphql/queries';
import * as subs from '../../../graphql/subscriptions'

// Material UI components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// moisture tooltip
const CustomTooltip2 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        
      return (
        <div className={styles.custom__tooltip}>
          <p className={styles.label}>{`${label.substring(0,label.length-2)} 2021`}</p>
          <p className={styles.intro}>{`Moist : ${payload[0].value} air g/kg`}</p>
          
        </div>
      );
    }
  
    return null;
  };
  
  //temperature tooltip
  const CustomTooltip1 = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className={styles.custom__tooltip}>
          <p className={styles.label}>{`${label.substring(0,label.length-2)} 2021`}</p>
          <p className={styles.intro}>
              {`Temp : ${payload[0].value} °C`}</p>
        </div>
      );
    }
  
    return null;
  };

function Analytics() {
    
    subsToHub()
    
    let str = "Godown 1>Compartment 1>Stack 1";

    // SideBar Collapsed State
    const { sidebarHide , setSidebarHide } = useContext(SideBarContext);
    //fetching data
    const [isLoading , setIsloading] = useState(true);


    const[Analyticsdata,setAnalyticsdata]=useState([
            {value:'Temperature',
            id:1,
            data:[],
              styleproperties:{
                graphbg:'rgba(32, 41, 58, 1)',
                stroke:'#838CF1',
                areabg:'rgba(58, 64, 92, 0.71)',
                rightcounterbg:'rgba(60, 72, 92, 0.76)'
              }
            },
            {value:'Moisture',
            id:2,
            data:[],
              styleproperties:{
                graphbg:'#07261C',
                stroke:'#309977',
                areabg:' #30997730',
                rightcounterbg:'rgba(54, 87, 76, 0.49)'
              }}
    ]);    

    useEffect(() => {
        async function fetchHubdata() {
            setIsloading(true);
            return await API.graphql({
                query : queries.listHubs
            }).then ((res) => {
                fetchValues(res); 
                try {
                } catch(err) {
                    console.log(err);
                }
            })
        }
        fetchHubdata();
    } , [])

    var temparr = [];
    var moisturearr = [];

    const fetchValues = (res) => {

        var singleHub = JSON.parse(res?.data?.listHubs?.items[0].description);
               
        singleHub?.map((item) => {
    
            try {
                if(item.description != null) {
                    temparr.push({
                        name: 'Jan,21',
                        uv: item.description.temperature,
                        pv: 2000,
                        amt: 2400
                    })
        
                    moisturearr.push({
                        name: 'Jan,21',
                        uv: item.description.moisture,
                        pv: 2400,
                        amt: 2400,
                    
                    })
                }

            } catch(err) {
                console.log(err);
            }
        })

        Analyticsdata[0].data = temparr;
        Analyticsdata[1].data = moisturearr;
        setAnalyticsdata(Analyticsdata);
        setIsloading(false);
    
    }
    
    async function subsToHub() {
        return await API.graphql(
            graphqlOperation(subs.onCreateHub)
        ).subscribe({
            next: _subsToHub,
            error: error => console.warn(error)
        });
    }   
    
    async function _subsToHub({provider, value}) {
        const createdHub = await value['data']['onCreateHub']
        const newData = JSON.parse(createdHub.description)[0];
        
        const newDataFinal = [
            {value:'Temperature',
            id:1,
            data:Analyticsdata[0].data.concat(newData.temperature),
              styleproperties:{
                graphbg:'rgba(32, 41, 58, 1)',
                stroke:'#838CF1',
                areabg:'rgba(58, 64, 92, 0.71)',
                rightcounterbg:'rgba(60, 72, 92, 0.76)'
              }
            },
            {value:'Moisture',
            id:2,
            data:Analyticsdata[1].data.concat(newData.moisture),
              styleproperties:{
                graphbg:'#07261C',
                stroke:'#309977',
                areabg:' #30997730',
                rightcounterbg:'rgba(54, 87, 76, 0.49)'
              }}
        ]

        setAnalyticsdata(newDataFinal);
    }
    
    return (
        <div>
            <SideBar selected={'analytics'} sidebarHide = {sidebarHide}/>
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
        {isLoading === true ?
            <Box className='loaderContainer'>
                <CircularProgress style={{padding : '0px'}}/>
            </Box> :
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 82px)'} : {}} className={styles.analytics__data__container}>
                
                <div className={styles.analytics__top__screen}>
                    <div className={styles.manager__analytics__details}>
                        <h1>Analytics dashboard</h1>
                        <h3>Monitor metrics, check reports and review performance</h3>
                    </div>
                    <button className={styles.details__export__button}>
                        <img src={downloadIcon} alt="downloadIcon" />
                        Export
                    </button>
                    <div className={styles.analytics__godown__menu}>
                        <div className={styles.individual__godown__menu}>
                            <img src={communityIcon} alt="communityIcon" />
                            Godown 1
                            <img src={chevronDownIcon} alt="chevronDownIcon" />
                        </div>
                        <div className={styles.individual__godown__menu}>
                            <img src={buildingIcon} alt="buildingIcon" />
                            Compartment 1
                            <img src={chevronDownIcon} alt="chevronDownIcon" />
                        </div>
                        <div className={styles.individual__godown__menu}>
                            <img src={homeIcon} alt="homeIcon" />
                            Stack 1
                            <img src={chevronDownIcon} alt="chevronDownIcon" />
                        </div>
                    </div>
                </div>
                <div className={styles.analytics__godown__stack__information}>
                    <h3>{str}</h3>
                <div className={styles.individual__godown__menu}>
                    <img src={calendarIcon} alt="calendarIcon" />
                    Last year
                    <img src={chevronDownIcon} alt="chevronDownIcon" />
                </div>
               
                </div>
            
            <div className={styles.analytics__container}>
            {Analyticsdata?.map((datavalue)=>(
                <div className={styles.analytics__individual__graphs} 
                style={{width:"100%",backgroundColor:`${datavalue.styleproperties.graphbg}`}}
                key={datavalue.id}>
                    <div className={styles.analytics__individual__graphs__content}>
                    <div className={styles.analytics__individual__graphs__left}>
                        <h3>{`${datavalue.value} Overview`}</h3>
                        <h4>Last year</h4>
                    </div>
                    <div className={styles.analytics__individual__graphs__right}>
                        <h3>Max projected Value : 32.5 C</h3>
                        <h3>Min projected Value : 27.8 C</h3>
                    </div>
                    </div>
                <ResponsiveContainer width="100%" aspect={4}>
                    
                <AreaChart
                    width={500}
                    height={400}
                    data={datavalue.data}
                    margin={{
                        top: 10,
                        right: 0,
                        left: 0,
                        bottom: 0,
                    }
                
                }
                    >
                    <CartesianGrid strokeDasharray="3 3" width="100%" height="100%" opacity={0.3}/>
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <Tooltip content={(datavalue.value==="Temperature")?<CustomTooltip1/>:<CustomTooltip2/>} 
                        cursor={{stroke:`${datavalue.styleproperties.stroke}`,strokeWidth:2}}
                     />

                    <Tooltip />

                    <Area type="monotone" dataKey="uv" stroke={datavalue.styleproperties.stroke} fill={datavalue.styleproperties.areabg} />
                    </AreaChart>
                </ResponsiveContainer>
                </div>
            ))}
            </div>
            </div>}
        </div>
    )
}
export default Analytics;
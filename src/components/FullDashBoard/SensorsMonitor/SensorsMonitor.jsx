/*
This file consist the SensorsMonitor Page
*/

// All the dependecies and components
import React, { useState , useEffect , useContext} from 'react'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './SensorsMonitor.module.scss';
import chevronDownIcon from './SensorsMonitorIcons/chevronDownIcon.png';
import moistureIcon from './SensorsMonitorIcons/moistureIcon.png';
import sunIcon from './SensorsMonitorIcons/sunIcon.png';
import temperatureIcon from './SensorsMonitorIcons/temperatureIcon.png';

// Graphql API
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';

// Material UI components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// Context for sidebar collapse state
import { SideBarContext } from '../../../Contexts/SideBarContext';

function SensorsMonitor() {
    // All States
    const {sidebarHide , setSidebarHide} = useContext(SideBarContext);

    const [inputSelected , setInputSelected] = useState('temperature');
    
    //fetching data
    const [isLoading , setIsloading] = useState(true);

    useEffect(() => {
        async function fetchHubdata() {
            setIsloading(true);
            return await API.graphql({
                query : queries.listHubs
            }).then ((res) => {
                try {
                    fetchValues(res);
                } catch(err) {
                    console.log(err);
                }
            })
        }
        
        fetchHubdata();
        
    } , [inputSelected]);

    const unitSelection = () => {
        if(inputSelected === 'temperature') return '°C';
        else if(inputSelected === 'moisture') return 'air g.kg-1';
        else return 'units';
    }

    const dataSelection = (data) => {
        if(inputSelected === 'temperature') return data?.temperature;
        else if(inputSelected === 'moisture') return data?.moisture;
        else return data?.temperature;
    }

    const fetchValues = (res) => {
        var singleHub = JSON.parse(res?.data?.listHubs?.items[0]?.description);

        const newData = [
            {
                'id' : 1 , 
                'compartment' : 1,
                'condition' : 'Condition is good',
                'alert' : 'no',
                'maxValue' : '127', 
                'minValue' : '23.37',
                'unit' : unitSelection(),
                'value' : dataSelection(singleHub[0]?.description)
            },
            {
                'id' : 2, 
                'compartment' : 2,
                'condition' : 'Condition is good',
                'alert' : 'no',
                'maxValue' : '128', 
                'minValue' : '20.37',
                'unit' : unitSelection(),
                'value' : dataSelection(singleHub[1]?.description)
            },
            {
                'id' : 3, 
                'compartment' : 3,
                'condition' : 'High tempertaure is detected',
                'alert' : 'yes',
                'maxValue' : '102', 
                'minValue' : '19.61',
                'unit' : unitSelection(),
                'value' : dataSelection(singleHub[2]?.description)
            },
            {
                'id' : 4, 
                'compartment' : 4,
                'condition' : 'Condition is good',
                'alert' : 'no',
                'maxValue' : '99.6', 
                'minValue' : '14.56',
                'unit' : unitSelection(),
                'value' : dataSelection(singleHub[3]?.description)
            },
            {
                'id' : 5, 
                'compartment' : 5,
                'condition' : 'Condition is good',
                'alert' : 'no',
                'maxValue' : '102', 
                'minValue' : '19.61',
                'unit' : unitSelection(),
                'value' : dataSelection(singleHub[4]?.description)
            },
            {
                'id' : 6 , 
                'compartment' : 6,
                'condition' : 'Low Moisture is detected',
                'alert' : 'yes',
                'maxValue' : '99.6', 
                'minValue' : '14.56',
                'unit' : unitSelection(),
                'value' : dataSelection(singleHub[5]?.description)
            }
        ]
        setReadingsData(newData);
        setIsloading(false);
    }

    const [readingsData , setReadingsData] = useState([]);

    const inputTemperature = () => {
        setInputSelected('temperature');
    }

    const inputMoisture = () => {
        setInputSelected('moisture');
    }

    const inputGas1 = () => {
        setInputSelected('gas1');
    }

    const inputGas2 = () => {
        setInputSelected('gas2');
    }

    return (
        <div>
            <SideBar selected={'sensorsMonitor'} sidebarHide = {sidebarHide}/>
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
            
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 82px)'} : {}} className={styles.sensorsMonitor__data__container}>

                <div className={styles.sensorsMonitor__top__screen}>
                    <div className={styles.manager__sensorsMonitor__details}>
                        <h1>Compartment Sensor Readings</h1>
                        <h3>Please Select the godown and compartment to view sensor reading</h3>
                    </div>

                    <div className={styles.sensorsMonitor__godown__menu}>
                        <div>
                            <h1>Godown 1</h1>
                            <h3>Location: 3L-45-2B</h3>
                        </div>
                        <img src={chevronDownIcon} alt="chevronDownIcon" />
                    </div>
                </div>    


                <div className={styles.different__readings__input}>
                    <button className={inputSelected === 'temperature' ? styles.individual__input__selected : styles.individual__input} onClick={inputTemperature}>
                        <img src={sunIcon} alt="sunIcon" />
                        Temperature
                    </button>
                    <button className={inputSelected === 'moisture' ? styles.individual__input__selected : styles.individual__input} onClick={inputMoisture}>
                        <img src={moistureIcon} alt="moistureIcon" />
                        Moisture
                    </button>
                    <button className={inputSelected === 'gas1' ? styles.individual__input__selected : styles.individual__input} onClick={inputGas1}>
                        <img src={temperatureIcon} alt="temperatureIcon" />
                        Gas 1 reading
                    </button>
                    <button className={inputSelected === 'gas2' ? styles.individual__input__selected : styles.individual__input} onClick={inputGas2}>
                        <img src={temperatureIcon} alt="temperatureIcon" />
                        Gas 2 reading
                    </button>
                </div>

                <div className={styles.compartmentsData__container}>
                {isLoading === true ?
                    <Box className='loaderContainer'>
                        <CircularProgress style={{padding : '0px'}}/>
                    </Box> :
                    <div className={styles.compartmentsData__cards__container}>
                        {readingsData.map ((individualData) => (
                            <div key={individualData.id} className={styles.compartmentsData__individual}>
                                <div className={styles.compartmentsData__information}>
                                    <div className={styles.compartmentsData__condition}>
                                        <h1>Compartment-{individualData.compartment}</h1>
                                        <h2 style={ individualData.alert==='yes' ? {color : 'red'} : {color : 'green'}}>{individualData.condition}</h2>
                                    </div>

                                    <div className={styles.compartmentsData__min__max__values}>
                                        <p>Max : <span className={styles.max__and__min__value}>{individualData.maxValue}<span className={styles.value__units}>{individualData.unit}</span></span></p>
                                        <p>Min : <span className={styles.max__and__min__value}>{individualData.minValue}<span className={styles.value__units}>{individualData.unit}</span></span></p>
                                    </div>
                                </div>
                                
                                <div className={styles.compartmentsData__values}>
                                    {individualData.value}<span>{individualData.unit}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                }
                </div>

            </div>

        </div>
    )
}

export default SensorsMonitor

/*
This file consist the Dashboard Page
*/

// All the dependecies and components
import React , { useState , useContext , useEffect } from 'react';
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './DashBoard.module.scss';
import managerIcon from './DashBoardIcons/manager.png';
import notificationIcon from './DashBoardIcons/notifications.png';
import chevronDownIcon from './DashBoardIcons/chevronDownIcon.png';
import sunIcon from './DashBoardIcons/sunIcon.png';
import moistureIcon from './DashBoardIcons/moistureIcon.png';
import temperatureIcon from './DashBoardIcons/temperatureIcon.png';

// Graphql API
import { API } from 'aws-amplify';
import * as queries from '../../../graphql/queries';

// Material UI components
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

// Context for sidebar collapse state
import { SideBarContext } from '../../../Contexts/SideBarContext';

function DashBoard() {
    // All States
    const { sidebarHide , setSidebarHide } = useContext(SideBarContext);

    const [readingsData , setReadingsData] = useState([]);

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
        
    } , []);

    const roundUp = (num) => {
        return Math.round((num + Number.EPSILON) * 100) / 100;
    }
    
    const fetchValues = (res) => {
        var singleHub = JSON.parse(res?.data?.listHubs?.items[0].description)
        var length = singleHub.length;
        var avgTemp = 0;
        var avgMoist = 0;
        
        if(singleHub && singleHub.length > 0) {
            
            singleHub?.map((individualReading) => {
                avgTemp += individualReading['description']['temperature'];
                avgMoist += individualReading['description']['moisture'];
            })

            avgTemp = roundUp(avgTemp/length);
            avgMoist = roundUp(avgMoist/length);
    
            const newReadingsData = [
                {
                    'id' : 1,   
                    'icon' : sunIcon,
                    'parameter' : 'Temperature', 
                    'value' : avgTemp,
                    'unit' : '°C'
                },
    
                {
                    'id' : 2,
                    'icon' : moistureIcon,
                    'parameter' : 'Moisture', 
                    'value' : avgMoist,
                    'unit' : 'air g.kg-1'
                },
            
                {
                    'id' : 3,
                    'icon' : temperatureIcon,
                    'parameter' : 'Gas 1 Reading', 
                    'value' : '10.93',
                    'unit' : 'units'
                },
    
                {
                    'id' : 4,
                    'icon' : temperatureIcon,
                    'parameter' : 'Gas 2 Reading', 
                    'value' : '12.93',
                    'unit' : 'units'
                },
            ]
    
            setReadingsData(newReadingsData);
            setIsloading(false);
        } 
    }
    
    return (
        <div>
            <SideBar selected={'dashboard'} sidebarHide = {sidebarHide} />
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
            
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 82px)'} : {}} className={styles.dashBoard__data__container}>
                
                <div className={styles.dashboard__top__screen}>
                    <div className={styles.dashboard__top__screen__details}>
                        <img src={managerIcon} alt="managerIcon" />
                        <div className={styles.manager__dashboard__details}>
                            <h1>Welcome Back, Ramesh!</h1>
                            <div>
                                <img src={notificationIcon} alt="notificationIcon" />
                                <h3>You have 3 new messages and 12 new tasks</h3>
                            </div>
                        </div>
                    </div>
                    
                    <div className={styles.dashboard__godown__menu}>
                        <div>
                            <h1>Godown 1</h1>
                            <h3>Location: 3L-45-2B</h3>
                        </div>
                        <img src={chevronDownIcon} alt="chevronDownIcon" />
                    </div>
                
                </div>

                {
                    isLoading === true ?
                    <Box className='loaderContainer'>
                        <CircularProgress style={{padding : '0px'}}/>
                    </Box> :
                    <div className={styles.dashboard__readings__container}>
                        
                        <div className={styles.dashboard__readings__heading}>
                            <h1>Sensor Readings</h1>
                            <span>LIVE</span>
                        </div>

                        <div className={styles.dashboard__readings__cards__container}>
                            <div className={styles.dashboard__readings__cards}>
                                {readingsData.length > 0 && readingsData?.map((individualReading) => (
                                    <div key={individualReading.id} className={styles.readings__card}>
                                        <div className={styles.readings__card__heading}>
                                            <img src={individualReading.icon} alt={individualReading.icon} />
                                            <h2>{individualReading.parameter}</h2>
                                        </div>
                                        <div className={styles.readings__card__data}>
                                            {individualReading.value}
                                            <span>{individualReading.unit}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.dashboard__status__and__conditions__container}>
                            <div className={styles.dashboard__status__and__conditions}>
                                <div className={styles.dashboard__status}>

                                </div>
                                <div className={styles.dashboard__conditions}>
                                    <div className={styles.conditions__heading}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

export default DashBoard
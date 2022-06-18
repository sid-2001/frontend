/*
This file consist the Alerts Page
*/

// All the dependecies and components

import React , { useContext, useState } from 'react'
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './Alerts.module.scss';

// Context for sidebar collapse state
import { SideBarContext } from '../../../Contexts/SideBarContext';

// Icons
import alert  from './AlertIcons/alert.png';
import clock from './AlertIcons/clock.png';
import tickmark from './AlertIcons/tickmark.png';
import crossmark from './AlertIcons/crossmark.png';
import z from './AlertIcons/z.png';
import warning from './AlertIcons/warning.png';
import info from './AlertIcons/info.png';
import success from './AlertIcons/tickmark.png';
import secured from './AlertIcons/secured.png';

function Alerts() {
   
    const dummyCommodityAlert = [
        {
            'type' : 'warning',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'info',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'warning',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'success',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'info',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'info',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'info',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        }
    ]

    const dummySystemStatus = [
        {
            'type' : 'success',
            'location' : 'Godown 1'
        },
        {
            'type' : 'success',
            'location' : 'Godown 2'
        },
        {
            'type' : 'error',
            'location' : 'Godown 3'
        },
    ]

    const dummyEnvironmentalFactors = [
        {
            'type' : 'error',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'error',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'warning',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'success',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
        {
            'type' : 'warning',
            'message' : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor'
        },
    ]

    // SideBar Collapsed State
    const { sidebarHide , setSidebarHide } = useContext(SideBarContext);

    const handleType = (type) => {
        if(type === 'warning') return warning;
        else if(type === 'success') return success;
        else if(type === 'info') return info;
        else if(type === 'error') return crossmark;
        else return '';
    }

    const [commoditiesData , setCommoditiesData] = useState(dummyCommodityAlert);
    const [environmentalFactorsData , setEnvironmentalFactorsData] = useState(dummyEnvironmentalFactors);

    const handleRemoveAlert = (index) => {
        commoditiesData.splice(index,1);
        setCommoditiesData([...commoditiesData]);
    }

    const handleRemoveFactorsLogs = (index) => {
        environmentalFactorsData.splice(index,1);
        setEnvironmentalFactorsData([...environmentalFactorsData]);
    }

    return (
        <div>
            <SideBar selected={'alerts'} sidebarHide = {sidebarHide}/>
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
            
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 80px)'} : {}} className={styles.alerts__data__container}>
                <div className={styles.alerts__top__screen}>
                    
                    <div className={styles.manager__alerts__details}>
                        <h1>Alerts & Notifications</h1>
                        <h3>Get all real time alerts and notifications at one place</h3>
                    </div>

                </div>

                <div className={styles.conditions__alerts__container}>
                    <div className={styles.condition__alert__wrapper}>
                        <img src={alert} alt="" />
                        <div className={styles.conditions__alert__text}>
                            <h1>ATMOSPHERIC CONDITIONS ALERT</h1>
                            <h3>Very poor atmospheric conditions have been recorded in Godown 1. Please take necessary actions.</h3>
                        </div>
                        <div className={styles.condition__alert__actions}>
                            <div className={styles.condition__alert__icon__background}>
                                <img src={clock}alt=""  className={styles.clock__image}/>
                                <img src={z}alt=""  className={styles.clock__center}/>
                                <img src={z}alt=""  className={styles.superscript__image}/>
                            </div>
                            <div className={styles.condition__alert__icon__background}>
                                <img src={tickmark} alt="" style={{width:'24px'}}/>
                            </div>
                            <div className={styles.condition__alert__icon__background}>
                                <img src={crossmark} alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.commidity__and__status__container}>
                    
                    <div className={styles.commidity__container}>
                        <h1 className={styles.container__heading}>
                            Commodity Quality
                        </h1>
                        <div className={styles.commodity__quality__alerts}>
                            {commoditiesData?.map((individualAlert , index) => {
                                return (
                                    <div key={index} className={individualAlert.type === 'error' ? `${styles.individual__alert} ${styles.alertType__error}` : individualAlert.type === 'warning' ? `${styles.individual__alert} ${styles.alertType__warning}` : individualAlert.type === 'info' ? `${styles.individual__alert} ${styles.alertType__info}` : `${styles.individual__alert} ${styles.alertType__success}`}>
                                        <div className={individualAlert.type === 'error' ? `${styles.alert__type} ${styles.alertType__error}` : individualAlert.type === 'warning' ? `${styles.alert__type} ${styles.alertType__warning}` : individualAlert.type === 'info' ? `${styles.alert__type} ${styles.alertType__info}` : `${styles.alert__type} ${styles.alertType__success}`}>
                                            <img src={handleType(individualAlert.type)} alt="" />
                                        </div>
                                        <div>
                                            <h2 style={individualAlert.type === 'error' ? {color:'#953432'} : individualAlert.type === 'warning' ? {color:'#8E713A'} : individualAlert.type === 'info' ? {color:'#497097'} : {color:'#6B7D5C'}} className={styles.alert__text}>{individualAlert.type.toUpperCase()}!</h2>
                                            {individualAlert.message}
                                        </div>
                                        <div className={styles.alert__actions}>     
                                            <div onClick={() => handleRemoveAlert(index)}>
                                                <img src={tickmark} alt="" />
                                            </div>
                                            <div onClick={() => handleRemoveAlert(index)}>
                                                <img src={crossmark} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.status__container}>
                        <div className={styles.system__and__security__status__container}>
                            <div className={styles.system__status}>
                                <h1 className={styles.container__heading}>
                                    System Status
                                </h1>
                                <div className={styles.system__status__logs__container}>
                                    {dummySystemStatus?.map((individualData , index) => {
                                        return (
                                            <div style={individualData.type === 'success' ? {backgroundColor :'#DDF0DB'} : {backgroundColor : '#F7CCD4'}} key={index} className={styles.system__status__log__individual}>
                                                <h2>{individualData.location}</h2>
                                                <div style={individualData.type === 'success' ? {backgroundColor :'#34A853'} : {backgroundColor : '#D80027'}}>

                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.security__status}>
                                <h1 className={styles.container__heading}>
                                    Security Status
                                </h1>
                                <div className={styles.security__status__image}>
                                    <div className={styles.security__status__background}>
                                        <img src={secured} alt="" />
                                        <h5>SECURED</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.environmental__factors__container}>
                            <h1 className={styles.container__heading}>
                                Environmental Factors
                            </h1>
                            <div className={styles.environmental__factors__log__container__}>
                                {environmentalFactorsData?.map((individualAlert , index) => {
                                    return (
                                        <div key={index} className={individualAlert.type === 'error' ? `${styles.individual__alert} ${styles.alertType__error}` : individualAlert.type === 'warning' ? `${styles.individual__alert} ${styles.alertType__warning}` : individualAlert.type === 'info' ? `${styles.individual__alert} ${styles.alertType__info}` : `${styles.individual__alert} ${styles.alertType__success}`}>
                                        <div className={individualAlert.type === 'error' ? `${styles.alert__type} ${styles.alertType__error}` : individualAlert.type === 'warning' ? `${styles.alert__type} ${styles.alertType__warning}` : individualAlert.type === 'info' ? `${styles.alert__type} ${styles.alertType__info}` : `${styles.alert__type} ${styles.alertType__success}`}>
                                            <img src={handleType(individualAlert.type)} alt="" />
                                        </div>
                                        <div>
                                            <h2 style={individualAlert.type === 'error' ? {color:'#953432'} : individualAlert.type === 'warning' ? {color:'#8E713A'} : individualAlert.type === 'info' ? {color:'#497097'} : {color:'#6B7D5C'}} className={styles.alert__text}>{individualAlert.type.toUpperCase()}!</h2>
                                            {individualAlert.message}
                                        </div>
                                        <div className={styles.alert__actions}>     
                                            <div onClick={() => handleRemoveFactorsLogs(index)}>
                                                <img src={tickmark} alt="" />
                                            </div>
                                            <div onClick={() => handleRemoveFactorsLogs(index)}>
                                                <img src={crossmark} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Alerts

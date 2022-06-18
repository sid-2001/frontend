/*
This file consist the SideBarSmall Component
*/

// All the dependecies and components
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './SideBarSmall.module.scss';

// Images
import managerIcon from './SideBarIcons/manager.png';
import dashboardIcon from './SideBarIcons/dashboard.png';
import sensorsMonitorIcon from './SideBarIcons/sensorsMonitor.png';
import analyticsIcon from './SideBarIcons/analytics.png';
import healthMonitorIcon from './SideBarIcons/healthMonitor.png';
import cropProfileIcon from './SideBarIcons/cropProfile.png';
import activityManagerIcon from './SideBarIcons/activityManager.png';
import AlertsIcon from './SideBarIcons/alert.png';

function SideBarSmall( {selected} ) {

    return (
        <div className={styles.sideBar__container__outer}>
            <div className={styles.sideBar__container}>
                <div className={styles.manager__profile}>
                    <img src={managerIcon} alt="managericon" />
                </div>

                <div className={styles.sidebar__components__container}>
                    
                        <Link to = '/dashboard'>
                            <div className={selected === 'dashboard' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                                <img src={dashboardIcon} alt="dashboardIcon" />
                            </div>
                        </Link>

                        <Link to = '/alerts'>
                            <div className={selected === 'alerts' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                                <img src={AlertsIcon} alt="AlertsIcon" />
                            </div>
                        </Link>

                        <Link to = '/activityManger'>
                            <div className={selected === 'activityManger' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                                <img src={activityManagerIcon} alt="activityManagerIcon" />
                            </div>
                        </Link>

                        <Link to = '/cropProfile'>
                            <div className={selected === 'cropProfile' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                                <img src={cropProfileIcon} alt="cropProfileIcon" />
                            </div>
                        </Link>

                        <Link to = '/sensorsMonitor'>
                            <div className={selected === 'sensorsMonitor' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>                    
                                <img src={sensorsMonitorIcon} alt="sensorsMonitorIcon" />
                            </div>
                        </Link>

                        <Link to = '/analytics'>
                            <div className={selected === 'analytics' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                                <img src={analyticsIcon} alt="analyticsIcon" />
                            </div>
                        </Link>

                        <Link to = '/healthMonitor'>
                            <div className={selected === 'healthMonitor' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                                <img src={healthMonitorIcon} alt="healthMonitorIcon" />
                            </div>
                        </Link>

                </div>
            </div>

        </div>
    )
}

export default SideBarSmall

/*
This file consist the SideBarLarge Component
*/

// All the dependecies and components
import React from 'react'
import { Link } from 'react-router-dom';
import styles from './SideBarLarge.module.scss';

// Images
import profileIcon from './SideBarIcons/profile.png';
import notificationsIcon from './SideBarIcons/notifications.png';
import managerIcon from './SideBarIcons/manager.png';
import dashboardIcon from './SideBarIcons/dashboard.png';
import sensorsMonitorIcon from './SideBarIcons/sensorsMonitor.png';
import analyticsIcon from './SideBarIcons/analytics.png';
import healthMonitorIcon from './SideBarIcons/healthMonitor.png';
import cropProfileIcon from './SideBarIcons/cropProfile.png';
import activityManagerIcon from './SideBarIcons/activityManager.png';
import AlertsIcon from './SideBarIcons/alert.png';

function SideBarLarge( {selected} ) {
    return (
        <div className={styles.sideBar__container__outer}>
            <div className={styles.sideBar__container}>

                <div className={styles.top__icons}>
                    <div>
                        LOGO
                    </div>
                    <img src={notificationsIcon} alt="notificationsIcon" />
                    <img src={profileIcon} alt="profileIcon" />
                </div>

                <div className={styles.manager__profile}>
                    <img src={managerIcon} alt="managericon" />
                    <div className={styles.manager__details}>
                        <h2>Ramesh Kumar</h2>
                        <h3>Warehouse Manager</h3>
                    </div>
                </div>

                <div className={styles.sidebar__components__container}>
                    <div className={selected === 'dashboard' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                        <img src={dashboardIcon} alt="dashboardIcon" />
                        <Link to = '/dashboard'>DashBoard</Link>
                    </div>

                    <div className={selected === 'alerts' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                        <img src={AlertsIcon} alt="AlertsIcon" />
                        <Link to = '/alerts'>Alerts & Notifications</Link>
                    </div>

                    <div className={selected === 'activityManger' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                        <img src={activityManagerIcon} alt="activityManagerIcon" />
                        <Link to = '/activityManger'>Activity Manager</Link>
                    </div>
                    
                    <div className={selected === 'cropProfile' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                        <img src={cropProfileIcon} alt="cropProfileIcon" />
                        <Link to = '/cropProfile'>Crop profile</Link>
                    </div>

                    <div className={selected === 'sensorsMonitor' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>                    
                        <img src={sensorsMonitorIcon} alt="sensorsMonitorIcon" />
                        <Link to = '/sensorsMonitor'>Sensors Monitor</Link>
                    </div>

                    <div className={selected === 'analytics' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                        <img src={analyticsIcon} alt="analyticsIcon" />
                        <Link to = '/analytics'>Analytics</Link>
                    </div>

                    <div className={selected === 'healthMonitor' ? styles.sidebar__component__individual__selected : styles.sidebar__component__individual}>
                        <img src={healthMonitorIcon} alt="healthMonitorIcon" />
                        <Link to = '/healthMonitor'>Crop Health Monitor</Link>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default SideBarLarge

/*
This file consist the CropProfile Page
*/

// All the dependecies and components
import React , { useContext } from 'react';
import SideBar from '../SideBar/SideBar';
import TopBar from '../TopBar/TopBar';
import styles from './CropProfile.module.scss';
import Commodities from './CropProfileContent';

// Images
import communityIcon from './CropProfileIcons/communityIcon.png';
import buildingIcon from './CropProfileIcons/buildingIcon.png';
import chevronDownIcon from './CropProfileIcons/chevronDownIcon.png';
import addIcon from './CropProfileIcons/addIcon.png';

// Context for sidebar collapse state
import { SideBarContext } from '../../../Contexts/SideBarContext';

function CropProfile() {

    // SideBar Collapsed State
    const { sidebarHide , setSidebarHide } = useContext(SideBarContext);

    return (
        <div>
            <SideBar selected={'cropProfile'} sidebarHide = {sidebarHide}/>
            <TopBar setSidebarHide = {setSidebarHide} sidebarHide = {sidebarHide} />
            
            <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 82px)'} : {}} className={styles.cropProfile__data__container}>
                <div className={styles.cropProfile__top__screen}>
                    
                    <div className={styles.manager__cropProfile__details}>
                        <h1>Crop Profile</h1>
                        <h3>Get an Overview of crop profile database</h3>
                    </div>
                    
                    <div className={styles.cropProfile__godown__menu}>
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
                    </div>
                
                </div>
                   
            <div className={styles.commodity__information}>
                <div className={styles.commodity__information__left}>
                    <h3>Commodities Stored :<span>12</span></h3>
                    <h4>Select a commodity to see it's profile</h4>
                </div>
                <div className={styles.commodity__information__right}>
                    <button>
                        <img src={addIcon} alt="addIcon"/>
                        <span>Add New Commodity</span>
                    </button>
                </div>
            </div>
                <div className={styles.commodities__container}>
                {Commodities?.map((commodity)=>(
                    <div key={commodity.id} className={styles.individual__commodities}>
                        <img src={commodity.img} alt={commodity.img}/>
                        <h3>Stack : {commodity.id}</h3>
                        <h2>{commodity.type}</h2>
                        <h4>{commodity.name}</h4>
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default CropProfile

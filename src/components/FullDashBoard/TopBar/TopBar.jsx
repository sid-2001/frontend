/*
This file consist the TopBar Components
*/

// All the dependecies and components
import React from 'react'
import styles from './TopBar.module.scss';
import bar from './TopBarIcons/bar.png';
import searchIcon from './TopBarIcons/searchIcon.png';
import languageIcon from './TopBarIcons/language.png';
import spreadIcon from './TopBarIcons/spread.png';
import goBackIcon from './TopBarIcons/Goback.png';

function TopBar( {setSidebarHide , sidebarHide} ) {
    return (
        <div style={sidebarHide === true ? {transition : '0.2s width ease-in-out' , width: 'calc(100% - 85px)'} : {}} className={styles.topBar__container__outer}>
            <div className={styles.topBar__container__inner}>

                <div className={styles.topBar__container__searchBar}>
                    <img onClick={ () => setSidebarHide(!sidebarHide) } src={bar} alt="bar"/>
                    <div className={styles.searchBar}>
                        <img src={searchIcon} alt="searchIcon" />
                        <input type="text" placeholder='Type in to search...'/>
                    </div>
                </div>

                <div className={styles.topBar__container__icons__right}>
                    <img src={languageIcon} alt="languageIcon" />
                    <img src={spreadIcon} alt="spreadIcon" />
                    <img src={goBackIcon} alt="goBackIcon" />
                </div>

            </div>
        </div>
    )
}

export default TopBar
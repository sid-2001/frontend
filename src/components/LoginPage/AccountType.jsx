/*
This file consist the Acount Type Components
*/

// All the dependecies and components

import React from 'react'
import styles from './AccountType.module.scss';

// Images
import accountType1 from './LoginPageIcons/accountType1.png';
import accountType2 from './LoginPageIcons/accountType2.png';
import accountType3 from './LoginPageIcons/accountType3.png';
import tick from './LoginPageIcons/tick.png';

function AccountType({ accountType , setAccountType }) {
    const accountSelection1 = () => {
        setAccountType("Manager");
    }
    
    const accountSelection2 = () => {
        setAccountType("Worker");
    }
    
    const accountSelection3 = () => {
        setAccountType("Client");
    }

    return (
        <div className={styles.account__type}>
            <div>
                <div className={styles.type} onClick={accountSelection1}>
                    <img src={accountType1} alt="accountType1" />
                    {accountType === 'Manager' ? <div className={styles.tick__outer}> <img className={styles.tick} src={tick} alt="tick" /> </div>: ''}
                </div>
                <div className={styles.type} onClick={accountSelection2}>
                    <img src={accountType2} alt="accountType2" />
                    {accountType === 'Worker' ? <div className={styles.tick__outer}> <img className={styles.tick} src={tick} alt="tick" /> </div>: ''}
                </div>
                <div className={styles.type} onClick={accountSelection3}>
                    <img src={accountType3} alt="accountType3" />
                    {accountType === "Client" ? <div className={styles.tick__outer}> <img className={styles.tick} src={tick} alt="tick" /> </div>: ''}
                </div>
            </div>
        </div>
    )
}

export default AccountType

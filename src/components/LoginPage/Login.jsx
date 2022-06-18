/*
This file consist the Login Page
*/

// All the dependecies and components

import React, { useEffect } from 'react'
import AccountType from './AccountType';
import styles from './Login.module.scss';
import { useState } from 'react';
import { Link } from "react-router-dom";
// Images
import mailIcon from './LoginPageIcons/mail.png';
import passwordIcon from './LoginPageIcons/password.png';
import googleIcon from './LoginPageIcons/google.png';
import facebookIcon from './LoginPageIcons/facebook.png';
import twitterIcon from './LoginPageIcons/twitter.png';

function Login() {

    // States
    const [accountType , setAccountType] = useState("");

    return (
        <>
            <div className={styles.top__heading}>
                <h1>
                    Choose Account Type
                </h1>
            </div>
            
            <AccountType accountType = {accountType} setAccountType = {setAccountType}/>
            
            <div className={styles.middle__text}>
                <h3>Hello {accountType}!</h3>
                <h3>Please fill out the form below to get started</h3>
            </div>

            <form className={styles.outer__form__container}>
                <div className={styles.inner__form__container}>
                    <div className={styles.email__field}>
                        <img src={mailIcon} alt="emailImg" />
                        <input type="email" placeholder='Email address' required/>
                    </div>
                    <div className={styles.password__field}>
                        <div className={styles.pipe__line}>

                        </div>
                        <button>
                            Forgot?
                        </button>
                        <img className={styles.Icon__Change} src={passwordIcon} alt="passwordImg" />
                        <input type="password" placeholder='Password' required/>
                    </div>
                </div>
                <div className={styles.submit__form__container}>
                    <div className={styles.sign__up}>New member?<button>Signup</button></div>
                    <Link to = "/dashboard"><button type='submit' className={styles.login__button}>Login</button></Link>
                </div>
            </form>

            <div className={styles.social__login__container}>
                <div className={styles.social__login__upper}>
                    <div className={styles.line}></div>
                    <h3>Or</h3>
                    <div className={styles.line}></div>
                </div>
                <h3>Continue with social media</h3>
                <div className={styles.social__login__icons}>
                    <a href="https://www.google.com" target='_blank' rel = "noopener noreferrer"><img src={googleIcon} alt="google" /></a>
                    <a href="https://www.facebook.com" target='_blank' rel = "noopener noreferrer"><img src={facebookIcon} alt="facebook" /></a>
                    <a href="https://www.twitter.com" target='_blank' rel = "noopener noreferrer"><img src={twitterIcon} alt="twitter" /></a>
                </div>
            </div>
        </>
    )
}

export default Login

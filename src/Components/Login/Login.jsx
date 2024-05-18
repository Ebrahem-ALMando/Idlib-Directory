import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import logo from '../../../../public/assets/img/lo.png'
import styles from './Login.module.css';
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import {urlDomainApi} from "../../URL_DomainApi";
import {toast} from "react-toastify";
import stylesC from '../Home/ContactUs/Contactus.module.css'
import Input from "../Tag/Input/Input";
import {Link} from "react-router-dom";
const Login=()=> {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handelSetEmail=event=>setEmail(event.target.value)
    const handelSetPassword=event=>setPassword(event.target.value)
    const validation=()=>{
        if(email.length>0&&password.length>0){
            return true
        }
        else {
            return  false;
        }
    }
    const clearData=()=>{
        setEmail('')
        setPassword('')
    }
    const submitLogin=async ()=>{
        if(validation()){
            try {
                await axios.post(`${urlDomainApi}/login`,{
                    email:email,
                    password:password}
                ).then((response)=>{
                    if(response.status===200){
                        toast.success('تم تسجيل الدخول . . \n جاري تحويلك للصفحة الرئيسية')
                        setTimeout(()=>{

                            localStorage.setItem('idUser', response.data.id);
                            window.location.href='/dashboard'
                            localStorage.setItem('activeLink','dashboard');
                        },3000)

                    }
                })
            }catch (error){
                toast.error('البيانات خاطئة')
            }
        }else {
            toast.error('يرجى ادخال جميع البيانات')
        }

    }

    return (
        <div className={styles.formLogin}>
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
                <div className={styles.divLogo}>
                    <img
                        className={styles.logo}
                        src="/assets/img/login/logo.gif"
                        alt="Logo"
                    />
                </div>
                <h1 className={styles.titleLogin}>
                    تسجيل الدخول
                </h1>


                <div>
                    <p className={styles.lable}>عنوان الايميل</p>
                    <Input placeholder="name@example.com" type="email" name="name"

                    />
                </div>

                <div>
                    <p className={styles.lable}>كلمة المرور</p>
                    <Input placeholder="Password" type="password" name="name"/>

                </div>


                {/*    <input
                    onChange={handelSetEmail}
                    className={styles.inputEmail}
                    type="email"
                    id="email"
                    placeholder="name@example.com" />*/}


                {/*  <input
                    onChange={handelSetPassword}
                    className={styles.inputEmail}
                    type="password"/>*/}
                {/*                <input

                    onClick={submitLogin}

                    className={`${styles.inputsubmit} btn btn-outline-primary `} type="submit" value="تسجيل دخول"/>*/}
                <button className={`${stylesC.btnSend} ${styles.inputsubmit}`}>
                    <div className="svg-wrapper-1">
                        <div className={stylesC.svgWrapper}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="24"
                                height="24"
                            >
                                <path fill="none" d="M0 0h24v24H0z"></path>
                                <path
                                    fill="currentColor"
                                    d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <span>تسجيل الدخول</span>
                </button>
                <div className={styles.foterLogin}>
                    <p className={styles.lable}>لا تملك حساب ؟



                    <Link
                        to={"/SignIn"}
                        className={`${styles.createAcc}`}
                    >
                        إنشاء حساب جديد
                    </Link>

                    </p>

                </div>
            </form>
        </div>
    );
}

export default Login;

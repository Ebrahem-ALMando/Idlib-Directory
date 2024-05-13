import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
// import logo from '../../../../public/assets/img/lo.png'
import styles from './Login.module.css';
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import {urlDomainApi} from "../../../URL_DomainApi";
import {toast} from "react-toastify";

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
            <form onSubmit={(e)=>e.preventDefault()} className={styles.form}>
               <div   className={styles.divLogo}>
                   <img
                       className={styles.logo}
                       src="/assets/img/login/lologin.png"
                       alt="Logo"
                   />
               </div>
                <h1 className={styles.titleLogin} >
                    تسجيل الدخول
                </h1>
                <p className={styles.lable}>عنوان الايميل</p>
                <input
                    onChange={handelSetEmail}
                    className={styles.inputEmail}
                    type="email"
                    id="email"
                    placeholder="name@example.com" />
                <p className={styles.lable}>كلمة المرور</p>

                <input
                    onChange={handelSetPassword}
                    className={styles.inputEmail}
                    type="password"/>
                <input
                    onClick={submitLogin}
                    className={styles.inputsubmit} type="submit" value="تسجيل دخول"/>
            </form>
        </div>
    );
}

export default Login;

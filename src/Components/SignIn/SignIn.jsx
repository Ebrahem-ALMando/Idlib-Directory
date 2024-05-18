
import React, { useState } from 'react';
// import logo from '../../../../public/assets/img/lo.png'
import styles from './SignIn.module.css';
import {Col, Row} from "react-bootstrap";
import axios from "axios";
import {urlDomainApi} from "../../URL_DomainApi";
import {toast} from "react-toastify";
import stylesC from '../Home/ContactUs/Contactus.module.css'
import Input from "../Tag/Input/Input";
import {Link} from "react-router-dom";
import {BiLogIn} from "react-icons/bi";
import {FaLocationDot} from "react-icons/fa6";
import {FaAddressCard, FaCalendarAlt, FaPhoneAlt, FaRegIdCard} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {RiLockPasswordFill} from "react-icons/ri";
import {SiAuthy} from "react-icons/si";



const SignIn=()=> {
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
        <div className={styles.conte}>


        <div className={styles.formLogin} >
            <form onSubmit={(e) => e.preventDefault()} className={styles.form}>
                <div className={styles.divLogo}>
                    <img
                        className={styles.logo}
                        src="/assets/img/login/logo.gif"
                        alt="Logo"
                    />
                </div>
                <h1 className={styles.titleLogin}>
                    انشاء حساب جديد
                </h1>

                <fieldset className={styles.groupBasicInfo} dir={"rtl"}>
                    <legend>
                          <span className={styles.icon}>
                                      <FaRegIdCard />

                            </span>
                        المعلومات الاساساية
                    </legend>
                    <Row className="">
                        <Col xl={6}>
                            <p className={styles.lable}>
                                 <span className={styles.icon}>
                                    <FaAddressCard/>
                            </span>
                                الاسم الكامل


                            </p>
                            <Input placeholder="Full Name" type="text" name="fullName"
                                   IsSign="True"

                            />
                        </Col>
                        <Col xl={6}>
                            <p className={styles.lable}>
                               <span className={styles.icon}>
                                    <FaCalendarAlt/>
                            </span>
                                العمر</p>
                            <Input placeholder="Age" type="number" name="age" IsSign={true}

                                  min={0} />


                        </Col>
                    </Row>
                    <Row className="">
                        <Col xl={6}>
                            <p className={styles.lable}>
                                <span className={styles.icon}>
                                    <FaPhoneAlt/>
                            </span>
                                رقم الهاتف</p>
                            <Input placeholder="Phone Number:(00..)" type="number" name="fullName"
                                   IsSign="True"
                                   min={0}

                            />
                        </Col>
                        <Col xl={6}>

                            <p className={styles.lable}>
                                <span className={styles.icon}>
                                 <FaLocationDot/>
                            </span>
                                العنوان
                            </p>
                            <Input placeholder="Address" type="text" name="fullName"
                                   IsSign={true}
                            />

                        </Col>
                    </Row>

                </fieldset>
                <fieldset className={styles.groupBasicInfo} dir={"rtl"}>
                    <legend>
                          <span className={styles.icon}>
                                  <SiAuthy />

                            </span>
                        معلومات تسجيل الدخول

                    </legend>
                    <Row className="d-flex justify-content-center">
                        <Col xl={12} className={styles.loginInfo}>
                            <p className={styles.lable}>
                                 <span className={styles.icon}>
                              <MdEmail />
                            </span>
                                عنوان الايميل


                            </p>
                            <Input placeholder="name@example.com" type="email" name="email"
                                   IsSignLog="True"

                            />
                        </Col>
                        <Col xl={12} className={styles.loginInfo}>
                            <p className={styles.lable}>
                               <span className={styles.icon}>
                               <RiLockPasswordFill />
                            </span>
                                كلمة المرور</p>
                            <Input placeholder="Password" type="password" name="password"
                                   IsSignLog={true}
                            />

                        </Col>
                    </Row>

                </fieldset>

                {/* <div>
                    <p className={styles.lable}>عنوان الايميل</p>
                    <Input placeholder="name@example.com" type="email" name="name"/>
                </div>

                <div>
                    <p className={styles.lable}>كلمة المرور</p>
                    <Input placeholder="Password" type="password" name="name"/>

                </div>*/}

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
                    <span>انشاء حساب جديد</span>
                </button>
                <div className={styles.foterLogin}>
                    <p className={styles.lable}>لديك حساب بالفعل ؟

                        <Link
                            to={"/Login"}
                            className={styles.createAcc}
                        >
                            تسجيل الدخول
                        </Link>

                    </p>

                </div>
            </form>
        </div>
        </div>
    );
}

export default SignIn;
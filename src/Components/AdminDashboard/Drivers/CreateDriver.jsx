import React, { useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import stylesTBUT from '../../Home/Services/Cards/CardTrips.module.css'
import styled from "styled-components";

import {AiOutlineUserAdd} from "react-icons/ai";
import {urlDomainApi} from "../../../URL_DomainApi";
import styles from './CreateDriver.module.css'
import {Button, Modal} from "react-bootstrap";
const CreateDriver=props=>{
    const [nameData, setNameData] = useState('');
    const [ageData, setAgeData] = useState('');
    const [experienceData, setExperienceData] = useState('');
    const [noteData, setNoteData] = useState('');
    const [show, setShow] = useState(false);


    const inputDriverName = (event) => {
        setNameData(event.target.value);
    };
    const inputDriverAge = (event) => {
        setAgeData(event.target.value);
    };
    const inputDriverExperience = (event) => {
        setExperienceData(event.target.value);
    };
    const inputDriverNote = (event) => {
        setNoteData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }
    const validateInput=()=>{
        if(nameData.length>0&&ageData.length>0&&experienceData.length>0){
            if(experienceData>20||experienceData<0){
                return false
            }
            return true
        }
        else {
            return  false;
        }
    }
    const createDriverData=async ()=>{
        if(validateInput()){
        //Submit Data
      await axios.post(`${urlDomainApi}/driver`,{
            DriverName: nameData,
            DriverAge: ageData,
            DriverExperience:experienceData,
            DriverNote:noteData,
        }).then((response)=>{
            if(response.status===200){
                toast.success("تم الانشاء بنجاح");
                
                getNewDriverData();
                handleClose();
                clearData();
            }else {
                toast.error("حدث خطأ يرجى اعادة المحاولة");
            }
        });
            }
            else {
                toast.error("يرجى ادخال جميع البيانات");
            }
        }
        const clearData=()=>{
        setNameData('')
        setNoteData('')
        setExperienceData('')
        setAgeData('')
        }
    const getNewDriverData = () => {
        props.getNewDriverData();
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

            <div className={`row text-right w-100 mb-3 pb-3 ${styles.btnCreate}`}>

                <button  type="button" className= {`${stylesTBUT.tripButton} `}
                         onClick={handleShow}   >
                    سائق جديد
                    <AiOutlineUserAdd/>
                </button>

            </div>
           {/* <div className="modal fade" id={"createModel"} tabIndex="-1" aria-labelledby="exampleModalLabel" >*/}
            <Modal  show={show} onHide={handleClose}>

                    <div className={`modal-content ${styles.modalContent}`}>
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className={`btn-close ${styles.btnClose}`} data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                            </div>
                            <div className="text-center">
                                <h5 className="modal-title text-black" id="exampleModalLabel">إضافة سائق</h5>
                            </div>
                        </div>


                        <div dir={"rtl"} className="modal-body text-black">
                            <form className="form" onSubmit={SubmitHandler}>
                                <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                    <div className="col-md-4">
                                        <label htmlFor="employeeName" className="col-form-label">الاسم الكامل</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="employeeName"
                                            placeholder="الاسم هنا"
                                            onChange={inputDriverName}
                                        />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                    <div className="col-md-4">
                                        <label htmlFor="employeeSalary" className="col-form-label">تاريخ الميلاد</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            min="1950-01-01"
                                            max="2003-12-31"
                                            type="date"
                                            className="form-control"
                                            id="employeeSalary"
                                            onChange={inputDriverAge}
                                        />


                                    </div>
                                </div>
                                <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                    <div className="col-md-4">
                                        <label htmlFor="experience" className="col-form-label">الخبرة</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input
                                            min={0}
                                            max={20}
                                            type="number"
                                            className="form-control"
                                            id="experience"
                                            placeholder="الخبرة هنا"
                                            onChange={inputDriverExperience}
                                        />
                                    </div>
                                </div>
                                <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                    <div className="col-md-4">
                                        <label htmlFor="description" className="col-form-label">ملاحظات</label>
                                    </div>
                                    <div className="col-md-8">
                                    <textarea
                                        className="form-control"
                                        id="description"
                                        placeholder="الملاحظات هنا"
                                        onChange={inputDriverNote}
                                    />
                                    </div>
                                </div>
                                <div className="col-md-4 offset-md-4 w-100" style={{ marginBottom: '1rem' }}>
                                    <button
                                        type="submit"
                                        className={stylesTBUT.tripButton}

                                        data-bs-dismiss="modal"
                                        onClick={createDriverData}
                                    >
                                        انشاء
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="modal-footer">
                            <button type="button" className="btn btn-dark w-100" data-bs-dismiss="modal" onClick={handleClose}>اغلاق</button>

                        </div>
                    </div>

            </Modal>
        </>
    )
}

export default CreateDriver;

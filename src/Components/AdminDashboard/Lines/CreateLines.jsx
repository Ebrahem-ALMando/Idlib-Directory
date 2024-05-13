import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import stylesTBUT from '../../Home/Services/Cards/CardTrips.module.css'
import styled from "styled-components";

import {AiOutlineUserAdd} from "react-icons/ai";
import {urlDomainApi} from "../../../URL_DomainApi";
import styles from '../Drivers/CreateDriver.module.css'
import {Button, Modal} from "react-bootstrap";

const CreateLines=props=>{
    const [nameData, setNameData] = useState('');
    const [premiseData, setPremiseData] = useState('');
    const [stableData, setStableData] = useState('');
    const [noteData, setNoteData] = useState('');
    const [show, setShow] = useState(false);

    const [dataRegions, setDataRegions] = useState([]);
    useEffect(() => {
        getRegionsList()

    }, []);
    const getRegionsList = async () => {
        try {
            const response = await axios.get(`${urlDomainApi}/region`);
            if (response.status === 200) {
                setDataRegions(response.data.Regions);
            } else {
                toast.error('حدث خطأ في جلب قائمة المناطق');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }
    };
    const inputLinesName = (event) => {
        setNameData(event.target.value);
    };
    const inputLinesPremise = (event) => {
        setPremiseData(event.target.value);
    };
    const inputLinesStable = (event) => {
        setStableData(event.target.value);
    };
    const inputLinesNote = (event) => {
        setNoteData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }

    const validateInput=()=>{

        if(nameData.length>0&&premiseData.length>0&stableData.length>0){

            return true
        }
        else {
            return  false;
        }
    }
    const createLineData=async ()=>{

        if(validateInput()){
            //Submit Data
            await axios.post(`${urlDomainApi}/line`,{
                name: nameData,
                premise: premiseData,
                stable:stableData,
                note:noteData,
            }).then((response)=>{
                if(response.status===200){
                    toast.success("تم الانشاء بنجاح");
                    getNewLinesData();
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
        setStableData('')
        setPremiseData('')
    }


    const getNewLinesData = () => {
        props.getNewLinesData();
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

            <div className={`row text-right w-100 mb-3 pb-3 ${styles.btnCreate}`}>

                <button  type="button" className= {`${stylesTBUT.tripButton} `}
                         onClick={handleShow}   >
                    خط جديد
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
                            <h5 className="modal-title text-black" id="exampleModalLabel">إضافة خط</h5>
                        </div>
                    </div>


                    <div dir={"rtl"} className="modal-body text-black">
                        <form className="form" onSubmit={SubmitHandler}>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="employeeName" className="col-form-label">اسم الخط</label>
                                </div>
                                <div className="col-md-8">
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="employeeName"
                                        placeholder="استخدم الصيغة A->B"
                                        onChange={inputLinesName}
                                    />
                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="employeeSalary" className="col-form-label">منطفة البداية</label>
                                </div>
                                <div className="col-md-8">
                                    <select   className="form-select"
                                              style={{color:'black'}}
                                              onInput={inputLinesPremise}

                                    >
                                        <option >
                                            ----
                                        </option>
                                        {dataRegions.map((item,index)=>{
                                            return(
                                                <option
                                                    key={index}
                                                    value={`${item.id}`}

                                                >
                                                    {`${(item.name)}`}
                                                </option>
                                            )
                                        })}
                                    </select>


                                </div>
                            </div>
                            <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                                <div className="col-md-4">
                                    <label htmlFor="experience" className="col-form-label">منظقة النهاية</label>
                                </div>
                                <div className="col-md-8">
                                    <select   className="form-select"
                                              style={{color:'black'}}
                                              onInput={inputLinesStable}

                                    >
                                        <option >
                                            ----
                                        </option>
                                        {dataRegions.map((item,index)=>{
                                            return(
                                                <option
                                                    key={index}
                                                    value={`${item.id}`}

                                                >
                                                    {`${(item.name)}`}
                                                </option>
                                            )
                                        })}
                                    </select>

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
                                        onChange={inputLinesNote}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 offset-md-4 w-100" style={{ marginBottom: '1rem' }}>
                                <button
                                    type="submit"
                                    className={stylesTBUT.tripButton}

                                    data-bs-dismiss="modal"
                                    onClick={createLineData}
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

export default CreateLines;

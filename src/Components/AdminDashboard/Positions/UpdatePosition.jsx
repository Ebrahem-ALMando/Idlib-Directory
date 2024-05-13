import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import stylesTBUT from '../../Home/Services/Cards/CardTrips.module.css'
import styled from "styled-components";
import {FiSearch} from "react-icons/fi";
import {AiOutlineUserAdd} from "react-icons/ai";
import {urlDomainApi} from "../../../URL_DomainApi";
import styles from './CreatePosition.module.css'
import {Button, Modal} from "react-bootstrap";

const UpdatePosition=props=>{



    const [nameData, setNameData] = useState('');
    const [XData, setXData] = useState('');
    const [YData, setYData] = useState('');
    const [lineData, setLineData] = useState('');
    const [noteData, setNoteData] = useState('');
    const [allLine, setAllLine] = useState([]);

    useEffect(() => {
        getAllLine()
    setNameData(props.Data.name);
    setXData(props.Data.point_x)
    setYData(props.Data.point_y)
    setLineData(props.Data.line_id);
    setNoteData(props.Data.note);
        console.log(props.Data.id)
    }, []);
   /* props.onChangeModal*/

    const inputPositionName = (event) => {
        setNameData(event.target.value);
    };
    const inputPositionX = (event) => {
        setXData(event.target.value);
    };
    const inputPositionY = (event) => {
        setYData(event.target.value);
    };
    const inputPositionLine = (event) => {
        setLineData(event.target.value);
    };
    const inputPositionNote = (event) => {
        setNoteData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }
    const getAllLine=async ()=> {
        await axios.get(`${urlDomainApi}/line`)
            .then((response) => {


                setAllLine(response.data.line)
            })
    }
    const validateInput=()=>{
        if(nameData.length>0&&XData.length>0&&YData.length>0){
            return true
        }
        else {
            return  false;
        }
    }
    const updatePositionData = async () => {
        if (validateInput()) {
            // البيانات التي تريد تحديثها يجب إرسالها هنا
            const updatedData = {
                // اجعل هنا البيانات التي تريد تحديثها

                name: nameData,
                point_x: XData,
                point_y:YData,
                line_id:1,
                note:noteData,
            };
            console.log(updatedData)
            await axios.post(`${urlDomainApi}/position/${props.Data.id}`, updatedData)
                .then((response) => {
                    if (response.status === 200) {
                        toast.success("تم التعديل بنجاح");
                        getNewPositionData();
                        handleClose();

                    } else {
                        toast.error("حدث خطأ يرجى إعادة المحاولة");
                    }
                })
                .catch((error) => {
                    console.error("حدث خطأ أثناء إرسال البيانات: ", error);
                    toast.error("حدث خطأ يرجى إعادة المحاولة");
                });
        } else {
            toast.error("يرجى إدخال جميع البيانات المطلوبة");
        }
    };

    const getNewPositionData = () => {
        props.getNewPositionData();
    };
    const handleClose = () => {
        props.handleClose();
    };

    return(
        <>
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
                                    value={nameData??" "}
                                    onChange={inputPositionName}
                                />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                            <div className="col-md-4">
                                <label htmlFor="employeeName" className="col-form-label">احداثيات النقطة X</label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="employeeName"
                                    placeholder="X"
                                    value={XData??" "}
                                    onChange={inputPositionX}
                                />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                            <div className="col-md-4">
                                <label htmlFor="employeeName" className="col-form-label">احداثيات النقطة Y</label>
                            </div>
                            <div className="col-md-8">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="employeeName"
                                    placeholder="Y"
                                    value={YData??" "}
                                    onChange={inputPositionY}
                                />
                            </div>
                        </div>
                        <div className="row g-3 align-items-center" style={{ marginBottom: '1rem' }}>
                            <div className="col-md-4">
                                <label htmlFor="experience" className="col-form-label">الخط: </label>
                            </div>
                            <div className="col-md-8">
                                <select   className="form-select"
                                          style={{color:'black'}}
                                          onInput={inputPositionLine}
                                          value={lineData??" "}

                                >
                                    <option >
                                        ----
                                    </option>
                                    {allLine.map((item,index)=>{
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
                                    value={noteData??" "}
                                    onChange={inputPositionNote}
                                />
                            </div>
                        </div>
                        <div className="col-md-4 offset-md-4 w-100" style={{ marginBottom: '1rem' }}>
                            <button
                                type="submit"
                                className={stylesTBUT.tripButton}

                                data-bs-dismiss="modal"
                                onClick={updatePositionData}
                            >
                                تعديل
                            </button>
                        </div>
                    </form>
                </div>

                <div className="modal-footer">
                    <button type="button" className="btn btn-dark w-100" data-bs-dismiss="modal" onClick={handleClose}>اغلاق</button>

                </div>
            </div>
        </>
    )
}

export default UpdatePosition;

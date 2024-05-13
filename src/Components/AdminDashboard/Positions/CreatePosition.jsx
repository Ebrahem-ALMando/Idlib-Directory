import React, {useEffect, useState} from "react";
import axios from "axios";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import stylesTBUT from '../../Home/Services/Cards/CardTrips.module.css'
import styled from "styled-components";

import {AiOutlineUserAdd} from "react-icons/ai";
import {urlDomainApi} from "../../../URL_DomainApi";
import styles from './CreatePosition.module.css'
import {Button, Modal} from "react-bootstrap";
const CreatePosition=props=>{
    const [nameData, setNameData] = useState('');
    const [XData, setXData] = useState('');
    const [YData, setYData] = useState('');
    const [lineData, setLineData] = useState('');
    const [noteData, setNoteData] = useState('');
    const [allLine, setAllLine] = useState([]);
    const [region, setRegion] = useState([]);
    const [show, setShow] = useState(false);
    const [lines,setLines]=useState([])
    useEffect(() => {
        getAllLine();
        getRegionsList();
    }, []);
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
    const inputDriverNote = (event) => {
        setNoteData(event.target.value);
    };
    const SubmitHandler=(e)=>{
        e.preventDefault();
    }
    const validateInput=()=>{
        if(nameData.length>0&&XData.length>0&&YData.length>0&&lineData.length>0){
            return true
        }
        else {
            return  false;
        }
    }
    const createPositionData=async ()=>{
        if(validateInput()){
            //Submit Data
            await axios.post(`${urlDomainApi}/position`,{
                name: nameData,
                point_x: XData,
                point_y:YData,
                line_id:lineData,
                note:noteData,
            }).then((response)=>{
                if(response.status===200){
                    toast.success("تم الانشاء بنجاح");
                    getNewPositionData();
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
    const getAllLine=async ()=> {
        await axios.get(`${urlDomainApi}/line`)
            .then((response) => {


                setAllLine(response.data.line)
            })
    }
    const getNameLine=async (id)=> {
        const filteredData = region.filter(item =>
            item.id===id?item.name:null

            // Add more conditions for additional fields as needed
        );

     await  setLines(filteredData)
       /* filteredData.map((item)=>{

        });
*/



    }

    const getRegionsList = async () => {
        try {
            const response = await axios.get(`${urlDomainApi}/region`);
            if (response.status === 200) {
                setRegion(response.data.Regions);
                getNameLine(2)
            } else {
                toast.error('حدث خطأ في جلب قائمة المناطق');
            }
        } catch (error) {
            toast.error('حدث خطأ في الاتصال بالخادم');
        }


    };
    const clearData=()=>{
        setNameData('')
        setNoteData('')
        setXData('')
        setYData('')
        setLineData('')
    }
    const getNewPositionData = () => {
        props.getNewPositionData();
    };
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>

            <div className={`row text-right w-100 mb-3 pb-3 ${styles.btnCreate}`}>

                <button  type="button" className= {`${stylesTBUT.tripButton} `}
                         onClick={handleShow}   >
                    موقف جديد
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
                            <h5 className="modal-title text-black" id="exampleModalLabel">إضافة موقف</h5>
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
                                        onChange={inputDriverNote}
                                    />
                                </div>
                            </div>
                            <div className="col-md-4 offset-md-4 w-100" style={{ marginBottom: '1rem' }}>
                                <button
                                    type="submit"
                                    className={stylesTBUT.tripButton}

                                    data-bs-dismiss="modal"
                                    onClick={createPositionData}
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

export default CreatePosition;

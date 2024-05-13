import React from "react";
import axios from "axios";
import {toast} from "react-toastify";
import {urlDomainApi} from "../../../URL_DomainApi";

const DeleteLine= props=>{
    const deleteLine=async ()=>{
        await axios.delete(`${urlDomainApi}/line/${props.Data.id}`
        ).then((response)=>{
            getNewLinesData();
            handleClose()
            toast.error("تم الحذف بنجاح");

        })
    }
    const getNewLinesData = () => {
        props.getNewLinesData();
    };
    const handleClose = () => {
        props.handleClose();
    };
    return(


        <div className="modal-content">
            <div className="modal-header">
                <button
                    type="button"
                    className="btn-close float-start"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleClose}
                ></button>
                <h5 className="modal-title text-center w-100" id="exampleModalLabel">
                    حذف الخط
                </h5>
            </div>
            <div className="modal-body text-black">
                <p className="text-center">
                    هل تريد حذف هذا الخط:{" "}
                    <span className="text-danger">{props.Data.name}</span>؟
                </p>
            </div>
            <div className="modal-footer">
                <button
                    type="button"
                    className="btn btn-danger w-100"
                    data-bs-dismiss="modal"
                    onClick={() => {
                        deleteLine();
                    }}
                >
                    حذف
                </button>
                <button
                    type="button"
                    className="btn btn-dark w-100"
                    onClick={handleClose}
                >
                    إغلاق
                </button>
            </div>
        </div>



    )
}
export default DeleteLine;

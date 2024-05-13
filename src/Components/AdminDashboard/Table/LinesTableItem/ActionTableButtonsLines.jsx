import React, {Component, useEffect, useState} from "react";


import axios from "axios";

import {AiFillEdit} from "react-icons/ai";
import {MdDeleteForever} from "react-icons/md";
import {Modal} from "react-bootstrap";
import DeleteLine from "../../Lines/DeleteLine";


const ActionTableButtonsLines=(props)=>{

    const [show, setShow] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const handleShow = () =>  setShow(true);
    const handleClose = () => setShow(false);
    const handleShowDelete = () =>  setShowDelete(true);
    const handleCloseDelete = () => setShowDelete(false);

    return (
        <td>
            {/* Btn Update*/}
            {/*data-bs-toggle="modal" data-bs-target={"#UpdateModal"+ this.props.echRowID}*/}
            <button   style={{margin:'1%'}} type="button" className="btn btn-light"
                      onClick={() => {
                          handleShow();
                      }}
            >

                <AiFillEdit />
            </button>
            <Modal  show={show} onHide={handleClose}>
             {/*   <UpdatePosition
                    getNewLinesData={props.getNewLinesData}
                    handleClose={handleClose} Data={props.Data}/>*/}
            </Modal>
            {/* Btn Delete*/}
            <button   style={{margin:'1%'}} type="button" className="btn btn-danger"

                      onClick={() => {
                          handleShowDelete()
                      }}

            >

                <MdDeleteForever/></button>
            <Modal  show={showDelete} onHide={handleCloseDelete}>
                <DeleteLine
                    getNewLinesData={props.getNewLinesData}
                    handleClose={handleCloseDelete} Data={props.Data}/>
            </Modal>

        </td>
    )
}



export  default ActionTableButtonsLines;


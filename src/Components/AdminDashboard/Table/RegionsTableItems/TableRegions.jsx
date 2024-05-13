import React, {useEffect, useState} from "react";

/*import CreateModal from "../users/CreateModal";*/
import {FiSearch} from "react-icons/fi";
import styled from "styled-components";
import styles from './../Table.module.css'
import TableRowRegions from "./TableRowRegions";

const  TableRegions=(props)=>{
    return(
        <table className={`table  ${styles.tableData}`}
               style={{maxWidth:'95%' ,marginTop:'3rem',marginRight:'2%',marginLeft:'3%'}}>

            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">{props.Col1}</th>
                <th scope="col">{props.Col2}</th>
                <th scope="col">{props.Col3}</th>
                <th scope="col">{props.Col4}</th>
                {/*    <th scope="col">{props.Col5}</th>
                <th scope="col">{props.Col6}</th>*/}
                <th style={{textAlign:'center'}} scope="col">تحكم</th>
            </tr>
            </thead>
            <tbody >
            {
                // props.data==="لا بوجد بيانات متطابقة"?"":
                props.data.map((item,index)=>{
                    return (

                        <TableRowRegions
                            getNewRegionsData={props.getNewRegionsData}
                            Data={item} key={index}/>
                    )
                })
            }
            </tbody>

        </table>

    )

}

export default TableRegions;

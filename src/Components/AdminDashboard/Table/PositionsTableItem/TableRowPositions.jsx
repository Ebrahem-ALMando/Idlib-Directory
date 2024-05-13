import React, {useEffect, useState} from "react";


import ActionTableButtonsPositions from "./ActionTableButtonsPositions";
import axios from "axios";
import {urlDomainApi} from "../../../../URL_DomainApi";



const  TableRowPositions= props=>{
    const [allLine, setAllLine] = useState([]);
    useEffect(() => {
        getAllLine()

    }, []);
    const getAllLine=async ()=> {
        await axios.get(`${urlDomainApi}/line`)
            .then((response) => {
                setAllLine(response.data.line)
            })
    }
   const getLineName=(lineNumber)=> {
        const line = allLine.find((l) => l.id === lineNumber);
        return line ? line.name : 'غير معروف';
    }
    return(
        <tr>
            <th prop="row">
                {props.Data.id}
            </th>
            <td className="h-50">
                {props.Data.name}
            </td>

            <td  className="h-50">{props.Data.point_x}</td>
            <td  className="h-50">{props.Data.point_y}</td>
            <td  className="h-50"> {getLineName(props.Data.line_id)}</td>
            <td  className="h-50"> {props.Data.note}</td>
            <ActionTableButtonsPositions
                getNewPositionData={props.getNewPositionData}
                Data={props.Data}/>
        </tr>

    )
}

export default TableRowPositions


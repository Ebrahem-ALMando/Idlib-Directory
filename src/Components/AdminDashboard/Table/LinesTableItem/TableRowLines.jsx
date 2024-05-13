import React, {useEffect, useState} from "react";



import axios from "axios";
import {urlDomainApi} from "../../../../URL_DomainApi";
import {toast} from "react-toastify";
import ActionTableButtonsLines from "./ActionTableButtonsLines";



const  TableRowPositions= props=>{
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
    const  getRegionName= (regionNumber)=> {
           const line = dataRegions.find((r) => r.id === regionNumber);
         return  line ? line.name : 'غير معروف';
    }
    return(
        <tr>
            <th prop="row">
                {props.Data.id}
            </th>
            <td className="h-50">
                {props.Data.name}
            </td>

            <td  className="h-50">{ getRegionName(props.Data.premise)}</td>
            <td  className="h-50">{getRegionName(props.Data.stable)}</td>
            <td  className="h-50"> {props.Data.note}</td>
            <ActionTableButtonsLines
                getNewLinesData={props.getNewLinesData}
                Data={props.Data}/>
        </tr>

    )
}

export default TableRowPositions


import React from "react";
import ActionTableButtonsDriver from "./ActionTableButtonsDriver";



const  TableRowDriver= props=>{
    return(
        <tr>
            <th prop="row">
                {props.Data.id}
            </th>
            <td className="h-50">
                {props.Data.full_name}
            </td>

            <td  className="h-50">{props.Data.age}</td>
            <td  className="h-50">{props.Data.experience+" - عام"}</td>
            <td  className="h-50"> {props.Data.note}</td>
            <ActionTableButtonsDriver
                getNewDriverData={props.getNewDriverData}
                echRowID={props.Data.id} Data={props.Data}/>
        </tr>

    )
}

export default TableRowDriver


import React from "react";
import ActionTableButtonsWagons from "./ActionTableButtonsWagons";





const  TableRowRegions= props=>{
    return(
        <tr>
            <th prop="row">
                {props.Data.id}
            </th>
            <td className="h-50">
                {props.Data.type}
            </td>
            <td  className="h-50">{props.Data.modle}</td>
            <td  className="h-50">{props.Data.number_chairs}</td>
            <td  className="h-50">{props.Data.car_number}</td>
            <td  className="h-50"> {props.Data.note}</td>
            <ActionTableButtonsWagons
                getNewWagonsData={props.getNewWagonsData}
                Data={props.Data}/>
        </tr>

    )
}

export default TableRowRegions


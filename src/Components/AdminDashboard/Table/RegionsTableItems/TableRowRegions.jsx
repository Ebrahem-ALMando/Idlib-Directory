import React from "react";

import ActionTableButtonsRegions from "./ActionTableButtonsRegions";



const  TableRowRegions= props=>{
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
            <td  className="h-50"> {props.Data.note}</td>
            <ActionTableButtonsRegions
                getNewRegionsData={props.getNewRegionsData}
                 Data={props.Data}/>
        </tr>

    )
}

export default TableRowRegions


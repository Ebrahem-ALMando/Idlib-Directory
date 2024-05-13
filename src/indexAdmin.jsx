import ReactDOM from "react-dom";

import React from "react";
import AppAdmin from "./AppAdmin";
import {BrowserRouter} from "react-router-dom";

if (document.getElementById("root")) {
    ReactDOM.render(
        <BrowserRouter>
            <AppAdmin />
        </BrowserRouter>
        , document.getElementById("root"));
}

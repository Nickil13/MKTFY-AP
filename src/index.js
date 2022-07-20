/*!

=========================================================
* Material Dashboard React - v1.10.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import Login from "layouts/Login";

import "assets/css/material-dashboard-react.css?v=1.10.0";
import "assets/css/tailwind.css";
import "assets/css/index.css";
import { ModalContextProvider } from "context/ModalContext";

// import { FAQ } from "views/FAQ";

ReactDOM.render(
    <ModalContextProvider>
        <BrowserRouter>
            <Switch>
                <Route path="/auth" component={Login} />
                <Route path="/admin" component={Admin} />
                <Redirect from="/" to="/auth/login" />
                {/* <Route path="/admin/FAQ/:id" component={FAQ} /> */}
            </Switch>
        </BrowserRouter>
    </ModalContextProvider>,
    document.getElementById("root")
);

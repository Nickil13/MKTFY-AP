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

// route sidebar icons
import Dashboard from "@material-ui/icons/Dashboard";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import { FAQsPage } from "views/FAQ";
import Listings from "views/Listings";
import User from "views/User";

const dashboardRoutes = [
    {
        path: "/dashboard",
        name: "Dashboard",
        icon: Dashboard,
        component: DashboardPage,
        layout: "/admin",
    },
    {
        path: "/listings",
        name: "Listings",
        icon: Dashboard,
        component: Listings,
        layout: "/admin",
    },
    {
        path: "/user",
        name: "User",
        icon: Dashboard,
        component: User,
        layout: "/admin",
    },
    {
        path: "/FAQ",
        name: "FAQ",
        icon: Dashboard,
        component: FAQsPage,
        layout: "/admin",
    },
];

export default dashboardRoutes;

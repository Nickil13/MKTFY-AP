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
import Dashboard from "assets/img/mktfy/grid.svg";
import Tag from "assets/img/mktfy/tag.svg";
import Users from "assets/img/mktfy/users.svg";
import Question from "assets/img/mktfy/help-circle.svg";

// core components/views for Admin layout
import DashboardPage from "views/Dashboard/Dashboard.js";
import { FAQsPage } from "views/FAQ";
import Listings from "views/Listings";
import UserManagement from "views/Users/UserManagement";

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
        icon: Tag,
        component: Listings,
        layout: "/admin",
    },
    {
        path: "/user",
        name: "User",
        icon: Users,
        component: UserManagement,
        layout: "/admin",
    },
    {
        path: "/FAQ",
        name: "FAQ",
        icon: Question,
        component: FAQsPage,
        layout: "/admin",
    },
];

export default dashboardRoutes;

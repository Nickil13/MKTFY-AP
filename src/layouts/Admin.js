import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Navbar from "components/Navbars/Navbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import styles from "assets/jss/material-dashboard-react/layouts/adminStyle.js";

import bgImage from "assets/img/mktfy/sidebar-img.png";
import logo from "assets/img/mktfy/MKTFY_wordmark.svg";
import Loader from "components/Loader";
import { useUserContext } from "context/UserContext";

const switchRoutes = (
    <Switch>
        {routes.map((prop, key) => {
            if (prop.layout === "/admin") {
                return (
                    <Route
                        path={prop.layout + prop.path}
                        component={prop.component}
                        key={key}
                    />
                );
            }
            return null;
        })}
        <Redirect from="/admin" to="/admin/dashboard" />
    </Switch>
);

const useStyles = makeStyles(styles);

export default function Admin({ ...rest }) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [editUserModalShowing, setEditUserModalShowing] = React.useState(
        false
    );
    const { isLoading } = useUserContext();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <div className={classes.wrapper}>
            {isLoading && <Loader />}
            <Sidebar
                routes={routes}
                logo={logo}
                image={bgImage}
                handleDrawerToggle={handleDrawerToggle}
                open={mobileOpen}
                color={"mktfyPurple"}
                showModal={() => setEditUserModalShowing(true)}
                {...rest}
            />
            <div className={classes.mainPanel}>
                <Navbar
                    routes={routes}
                    handleDrawerToggle={handleDrawerToggle}
                    modalShowing={editUserModalShowing}
                    showModal={() => setEditUserModalShowing(true)}
                    closeModal={() => setEditUserModalShowing(false)}
                    {...rest}
                />

                <div className={classes.content}>
                    <div className={classes.container + " tw-min-h-ap "}>
                        {switchRoutes}
                    </div>
                </div>
            </div>
        </div>
    );
}

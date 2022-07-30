import React, { useEffect, useState } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Hidden from "@material-ui/core/Hidden";
// @material-ui/icons
import Menu from "@material-ui/icons/Menu";
// core components
import AdminNavbarLinks from "./AdminNavbarLinks.js";
import Button from "components/CustomButtons/Button.js";

//hooks
import { useRouteName } from "hooks";

import styles from "assets/jss/material-dashboard-react/components/headerStyle.js";
import EditUserModal from "components/Modal/EditUserModal.js";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function Header(props) {
    const classes = useStyles();
    let routeName = useRouteName();
    let location = useLocation();
    const { color } = props;
    const appBarClasses = classNames({
        [" " + classes[color]]: color,
    });
    const [modalShowing, setModalShowing] = useState(false);
    const showModal = () => {
        setModalShowing(true);
    };
    const closeModal = () => {
        setModalShowing(false);
    };

    useEffect(() => {
        routeName = useRouteName();
    }, [location]);

    return (
        <AppBar className={classes.appBar + appBarClasses}>
            <Toolbar
                className={
                    classes.container +
                    "tw-flex tw-items-end tw-h-[122px] tw-p-5 tw-box-border tw-border-transparent tw-border-b tw-border-b-gray-200 tw-border-solid tw-ml-8 tw-pl-0 tw-mr-24"
                }
            >
                <div className={classes.flex}>
                    {/* Here we create navbar brand, based on route name */}
                    <Button
                        color="transparent"
                        href="#"
                        className={
                            classes.title +
                            " tw-text-[30px] tw-text-gray-600 tw-font-normal tw-pl-0"
                        }
                    >
                        {routeName}
                    </Button>
                </div>
                <Hidden smDown implementation="css">
                    <AdminNavbarLinks showModal={showModal} />
                </Hidden>
                <Hidden mdUp implementation="css">
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={props.handleDrawerToggle}
                    >
                        <Menu />
                    </IconButton>
                </Hidden>
            </Toolbar>
            {/* Edit User Nav Modal */}
            {modalShowing && (
                <div className="tw-modal-container">
                    <EditUserModal closeModal={closeModal} />
                </div>
            )}
        </AppBar>
    );
}

Header.propTypes = {
    color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
    rtlActive: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
    routes: PropTypes.arrayOf(PropTypes.object),
};

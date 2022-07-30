import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

import Poppers from "@material-ui/core/Popper";
// @material-ui/icons

import Search from "@material-ui/icons/Search";
// core components
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-dashboard-react/components/headerLinksStyle.js";
import { useUserContext } from "context/UserContext";
import { ReactComponent as DownArrow } from "assets/img/mktfy/chevron-down.svg";
import { useRouteName } from "hooks";
const useStyles = makeStyles(styles);

export default function AdminNavbarLinks({ showModal }) {
    const classes = useStyles();
    const [openProfile, setOpenProfile] = React.useState(null);
    const { logout } = useUserContext();
    const routeName = useRouteName();

    const handleClickProfile = (event) => {
        if (openProfile && openProfile.contains(event.target)) {
            setOpenProfile(null);
        } else {
            setOpenProfile(event.currentTarget);
        }
    };
    const handleCloseProfile = () => {
        setOpenProfile(null);
    };

    const handleLogout = () => {
        handleCloseProfile();
        logout();
    };
    return (
        <div className="tw-flex tw-flex-col md:tw-flex-row">
            {routeName !== "Dashboard" && (
                <div className={classes.searchWrapper}>
                    <CustomInput
                        formControlProps={{
                            className: classes.margin + " " + classes.search,
                        }}
                        inputProps={{
                            placeholder: "Search",
                            inputProps: {
                                "aria-label": "Search",
                            },
                        }}
                    />
                    <Button color="white" aria-label="edit" justIcon round>
                        <Search />
                    </Button>
                </div>
            )}

            <div className={classes.manager}>
                <button
                    className="tw-flex tw-items-center tw-border-y-0 tw-border-x-0 tw-pr-7 md:tw-pr-1.5 md:tw-ml-8 md:tw-pl-8 md:tw-border-l tw-bg-transparent"
                    aria-owns={openProfile ? "profile-menu-list-grow" : null}
                    aria-haspopup="true"
                >
                    <p className="tw-mr-[71px] tw-font-semibold tw-text-[24px] tw-text-gray-600">
                        <span className="tw-font-bold">MKTFY </span>ADMIN
                    </p>
                    <DownArrow
                        className="tw-w-6 tw-cursor-pointer"
                        onClick={handleClickProfile}
                    />
                </button>
                <Poppers
                    open={Boolean(openProfile)}
                    anchorEl={openProfile}
                    transition
                    disablePortal
                    className={
                        classNames({ [classes.popperClose]: !openProfile }) +
                        " tw-top-16 -tw-left-20 tw-w-full tw-max-w-[575px] " +
                        classes.popperNav
                    }
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            id="profile-menu-list-grow"
                            style={{
                                transformOrigin:
                                    placement === "bottom start"
                                        ? "center top"
                                        : "center bottom",
                            }}
                        >
                            <Paper className="tw-pt-10 tw-rounded-lg tw-shadow-[0px_3px_6px_#00000029] tw-overflow-hidden">
                                <ClickAwayListener
                                    onClickAway={handleCloseProfile}
                                >
                                    <MenuList role="menu" className="tw-pb-0">
                                        <span className="tw-text-gray-footer-border tw-text-[30px] tw-font-semibold tw-pl-9 tw-hidden md:tw-block">
                                            MKTFY ADMIN
                                        </span>
                                        <MenuItem
                                            onClick={() => {
                                                handleCloseProfile();
                                                showModal();
                                            }}
                                            className={
                                                classes.dropdownItem +
                                                " tw-text-[24px] tw-text-purple-400 tw-mb-8 tw-pl-9 tw-ml-0"
                                            }
                                        >
                                            Edit Profile
                                        </MenuItem>

                                        <MenuItem
                                            onClick={handleLogout}
                                            className={
                                                classes.dropdownItem +
                                                " tw-text-[#5B2BAE] tw-text-[24px] md:tw-text-[28px] md:tw-bg-beige-200 tw-p-9 tw-mx-0"
                                            }
                                        >
                                            Logout
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Poppers>
            </div>
        </div>
    );
}

AdminNavbarLinks.propTypes = {
    showModal: PropTypes.func,
};

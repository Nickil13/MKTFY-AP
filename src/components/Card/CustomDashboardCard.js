import React from "react";
import Card from "./Card";
import CardHeader from "./CardHeader";
import CardIcon from "./CardIcon";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CardFooter from "./CardFooter";
const useStyles = makeStyles(styles);
import { FiUserPlus } from "react-icons/fi";
export default function CustomDashboardCard({
    icon,
    reactIcon,
    cardCategory,
    cardValue,
    cardSubtitle,
    cardFooterText,
}) {
    const classes = useStyles();

    return (
        <Card className="tw-rounded-[10px] tw-shadow-[0px_9px_20px_#00000024] tw-max-w-[260px] tw-min-w-[260px]">
            <CardHeader className="" color="gold" stats icon>
                <CardIcon
                    color="gold"
                    className="tw-flex tw-items-center tw-justify-center tw-box-border tw-h-[90px] tw-w-[90px] -tw-mt-10 tw-rounded-md"
                >
                    {icon && (
                        <img
                            className="tw-w-full tw-max-w-[40px] tw-max-h-[40px]"
                            src={icon}
                            alt="users icon"
                        />
                    )}
                    {reactIcon === "user-plus" && <FiUserPlus />}
                </CardIcon>
                <p
                    className={
                        classes.cardCategory +
                        " tw-text-[24px] tw-font-light tw-pt-[13px]"
                    }
                >
                    {cardCategory}
                </p>
                <h3
                    className={
                        classes.cardTitle +
                        " tw-text-[45px] tw-font-bold tw-pr-4 tw-pt-12"
                    }
                >
                    {cardValue}
                </h3>
                <p className="tw-text-[21px] tw-text-gray-600 tw-mr-4 tw-my-0">
                    {cardSubtitle}
                </p>
            </CardHeader>
            <CardFooter
                stats
                className={`${cardFooterText ? "tw-py-2" : "tw-py-5"}`}
            >
                <p className="tw-ml-auto tw-my-0">{cardFooterText}</p>
            </CardFooter>
        </Card>
    );
}

CustomDashboardCard.propTypes = {
    icon: PropTypes.string,
    reactIcon: PropTypes.string,
    cardCategory: PropTypes.string,
    cardSubtitle: PropTypes.string,
    cardValue: PropTypes.string,
    cardFooterText: PropTypes.string,
};

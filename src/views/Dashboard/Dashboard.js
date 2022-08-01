import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import usersIcon from "assets/img/mktfy/users.svg";
import tagIcon from "assets/img/mktfy/tag.svg";
import moneyIcon from "assets/img/mktfy/dollar-sign.svg";

import { dailySalesChart } from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
import CustomDashboardCard from "components/Card/CustomDashboardCard";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <h2 className="tw-text-gray-600 tw-text-[30px] tw-my-0 tw-pb-14">
                Today, August 23, 2021
            </h2>
            <GridContainer>
                <GridItem xs={12} md={6} lg={4} xl={3}>
                    <CustomDashboardCard
                        icon={usersIcon}
                        cardCategory="Total Users"
                        cardValue="250"
                        cardSubtitle="Buyers and Sellers"
                    />
                </GridItem>
                <GridItem xs={12} md={6} lg={4} xl={3}>
                    <CustomDashboardCard
                        icon={tagIcon}
                        cardCategory="All Listings"
                        cardValue="500"
                        cardSubtitle="This month"
                    />
                </GridItem>
                <GridItem xs={12} md={6} lg={4} xl={3}>
                    <CustomDashboardCard
                        reactIcon="user-plus"
                        cardCategory="New Users"
                        cardValue="+45"
                        cardSubtitle="Today"
                    />
                </GridItem>
                <GridItem xs={12} md={6} lg={4} xl={3}>
                    <CustomDashboardCard
                        icon={moneyIcon}
                        cardCategory="Avg Sales"
                        cardValue="1000"
                        cardSubtitle="Per day"
                        cardFooterText="Calculated over the last year"
                    />
                </GridItem>
            </GridContainer>
            <GridContainer className="tw-pt-[65px]">
                <GridItem xs={12} sm={12} md={6}>
                    <Card chart className="tw-w-full tw-max-w-[645px]">
                        <CardHeader
                            color="mktfyPurple"
                            className="tw-flex tw-content-center tw-justify-center tw-mx-6 tw-p-8 tw-rounded-lg tw-min-h-[287px] -tw-mt-10"
                        >
                            <ChartistGraph
                                className="ct-chart tw-w-full"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4
                                className={
                                    classes.cardTitle +
                                    " tw-text-base-lg tw-font-light tw-mt-5"
                                }
                            >
                                Sales per day over a month
                            </h4>
                            <p className={classes.cardCategory}>
                                <span
                                    className={
                                        classes.successText + " tw-text-[21px]"
                                    }
                                >
                                    <TrendingUp
                                        className={
                                            classes.upArrowCardCategory +
                                            "tw-box-border tw-w-6"
                                        }
                                    />{" "}
                                    55%
                                </span>{" "}
                                <span className="tw-text-[18px] tw-ml-3">
                                    Increase in this weeks sales.
                                </span>
                            </p>
                        </CardBody>
                        <CardFooter chart></CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
        </div>
    );
}

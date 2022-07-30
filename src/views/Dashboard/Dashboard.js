import React from "react";
// react plugin for creating charts
//import ChartistGraph from "react-chartist";
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

// import {
//     dailySalesChart,
//     // emailsSubscriptionChart,
//     // completedTasksChart,
// } from "variables/charts.js";

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
                    {/* <Card>
                        <CardHeader color="info" stats icon>
                            <CardIcon color="info">
                                <Accessibility />
                            </CardIcon>
                            <p className={classes.cardCategory}>Followers</p>
                            <h3 className={classes.cardTitle}>+245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <Update />
                                Just Updated
                            </div>
                        </CardFooter>
                    </Card> */}
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            {/* <ChartistGraph
                                className="ct-chart"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            /> */}
                        </CardHeader>
                        <CardBody>
                            <h4 className={classes.cardTitle}>
                                Sales per day over a month
                            </h4>
                            <p className={classes.cardCategory}>
                                <span className={classes.successText}>
                                    <TrendingUp
                                        className={classes.upArrowCardCategory}
                                    />{" "}
                                    55%
                                </span>{" "}
                                Increase in this weeks sales.
                            </p>
                        </CardBody>
                        <CardFooter chart></CardFooter>
                    </Card>
                </GridItem>
            </GridContainer>
            {/* <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <CustomTabs
            title="Tasks:"
            headerColor="primary"
            tabs={[
              {
                tabName: "Bugs",
                tabIcon: BugReport,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0, 3]}
                    tasksIndexes={[0, 1, 2, 3]}
                    tasks={bugs}
                  />
                ),
              },
              {
                tabName: "Website",
                tabIcon: Code,
                tabContent: (
                  <Tasks
                    checkedIndexes={[0]}
                    tasksIndexes={[0, 1]}
                    tasks={website}
                  />
                ),
              },
              {
                tabName: "Server",
                tabIcon: Cloud,
                tabContent: (
                  <Tasks
                    checkedIndexes={[1]}
                    tasksIndexes={[0, 1, 2]}
                    tasks={server}
                  />
                ),
              },
            ]}
          />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Card>
            <CardHeader color="warning">
              <h4 className={classes.cardTitleWhite}>Employees Stats</h4>
              <p className={classes.cardCategoryWhite}>
                New employees on 15th September, 2016
              </p>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="warning"
                tableHead={["ID", "Name", "Salary", "Country"]}
                tableData={[
                  ["1", "Dakota Rice", "$36,738", "Niger"],
                  ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                  ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                  ["4", "Philip Chaney", "$38,735", "Korea, South"],
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer> */}
        </div>
    );
}

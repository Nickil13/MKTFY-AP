import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";

import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
// import ArrowUpward from "@material-ui/icons/ArrowUpward";
import TrendingUp from "@material-ui/icons/TrendingUp";
// import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import usersIcon from "assets/img/mktfy/users.svg";
// import { bugs, website, server } from "variables/general.js";

import {
    dailySalesChart,
    // emailsSubscriptionChart,
    // completedTasksChart,
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
    const classes = useStyles();
    return (
        <div>
            <GridContainer>
                <GridItem xs={12} sm={6} md={3}>
                    <Card className="dashboard-card">
                        <CardHeader color="gold" stats icon>
                            <CardIcon color="gold">
                                <img
                                    className="card-icon_img"
                                    src={usersIcon}
                                    alt="users icon"
                                />
                                {/* <Icon>content_copy</Icon> */}
                            </CardIcon>
                            <p className={classes.cardCategory}>Total Users</p>
                            <h3 className={classes.cardTitle}>250</h3>
                            <p className={classes.subCardTitle}>
                                Buyers and Sellers
                            </p>
                        </CardHeader>
                        <CardFooter stats></CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="success" stats icon>
                            <CardIcon color="success">
                                <Store />
                            </CardIcon>
                            <p className={classes.cardCategory}>Revenue</p>
                            <h3 className={classes.cardTitle}>$34,245</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <DateRange />
                                Last 24 Hours
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
                        <CardHeader color="danger" stats icon>
                            <CardIcon color="danger">
                                <Icon>info_outline</Icon>
                            </CardIcon>
                            <p className={classes.cardCategory}>Fixed Issues</p>
                            <h3 className={classes.cardTitle}>75</h3>
                        </CardHeader>
                        <CardFooter stats>
                            <div className={classes.stats}>
                                <LocalOffer />
                                Tracked from Github
                            </div>
                        </CardFooter>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={3}>
                    <Card>
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
                    </Card>
                </GridItem>
            </GridContainer>
            <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                    <Card chart>
                        <CardHeader color="success">
                            <ChartistGraph
                                className="ct-chart"
                                data={dailySalesChart.data}
                                type="Line"
                                options={dailySalesChart.options}
                                listener={dailySalesChart.animation}
                            />
                        </CardHeader>
                        <CardBody>
                            <h4 className="tw-text-blue-400 tw-rounded-sm">
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

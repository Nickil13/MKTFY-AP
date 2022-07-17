import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import React from "react";
import Table from "components/Table/Table.js";
// import { ReactComponent as Arrow } from "assets/img/mktfy/Path 37931.svg";
//import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";
//import { makeStyles } from "@material-ui/core";

//const useStyles = makeStyles(styles);

export default function FAQPage() {
    //const classes = useStyles();
    return (
        <div>
            <Card>
                <CardHeader
                    color="success"
                    stats
                    icon
                    className={`tw-flex tw-justify-between  tw-bg-[#631BAF] tw-rounded-[10px] tw-px-6 tw-py-10 -tw-top-10 tw-shadow-[0px_6px_20px_#00000024]`}
                >
                    <h3 className="tw-font-semibold tw-text-[42px] tw-text-start">
                        Frequently Asked Questions
                    </h3>
                    <button className="tw-bg-[#FFBA00] tw-w-[185px] tw-rounded-full tw-text-[20px] tw-text-white">
                        Add
                    </button>
                </CardHeader>
                <CardBody>
                    <Table
                        tableHeaderColor="primary"
                        tableHead={[]}
                        tableData={[
                            ["1", "How MKTFY works?"],
                            ["2", "How can I sell things on MKTFY?"],
                        ]}
                    />
                </CardBody>
                <CardFooter stats></CardFooter>
            </Card>
        </div>
    );
}

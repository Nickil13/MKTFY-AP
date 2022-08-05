import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// core components
import styles from "assets/jss/material-dashboard-react/components/tableStyle.js";

const useStyles = makeStyles(styles);

export default function CustomTable(props) {
    const classes = useStyles();
    const {
        tableHead,
        tableData,
        tableHeaderColor,
        handleRowClick,
        className,
    } = props;
    return (
        <div className={classes.tableResponsive + " " + className}>
            <Table className={classes.table}>
                {tableHead !== undefined ? (
                    <TableHead
                        className={classes[tableHeaderColor + "TableHeader"]}
                    >
                        <TableRow
                            className={
                                classes.tableHeadRow +
                                " tw-text-base-lg tw-text-purple-400"
                            }
                        >
                            {tableHead.map((prop, key) => {
                                const isCentered =
                                    prop.includes("Active") ||
                                    prop === "Purchases";

                                return (
                                    <TableCell
                                        className={
                                            classes.tableCell +
                                            ` tw-pb-8 tw-pl-8 tw-font-normal ${
                                                isCentered && "tw-text-center"
                                            } ` +
                                            classes.tableHeadCell
                                        }
                                        key={key}
                                    >
                                        {prop}
                                    </TableCell>
                                );
                            })}
                        </TableRow>
                    </TableHead>
                ) : null}
                <TableBody>
                    {tableData.map((prop, key) => {
                        const propArray = Object.values(prop).slice(1);
                        return (
                            <TableRow
                                key={key}
                                className={
                                    classes.tableBodyRow +
                                    " tw-cursor-pointer even:tw-bg-beige-200"
                                }
                                onClick={() => handleRowClick(prop.id)}
                            >
                                {propArray.map((prop, key) => {
                                    return (
                                        <TableCell
                                            className={
                                                classes.tableCell +
                                                ` tw-pl-8 tw-py-8 tw-text-[21px] tw-text-gray-400 tw-font-normal ${
                                                    !isNaN(prop) &&
                                                    "tw-text-center"
                                                }`
                                            }
                                            key={key}
                                        >
                                            {prop}
                                        </TableCell>
                                    );
                                })}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </div>
    );
}

CustomTable.defaultProps = {
    tableHeaderColor: "gray",
};

CustomTable.propTypes = {
    tableHeaderColor: PropTypes.oneOf([
        "warning",
        "primary",
        "danger",
        "success",
        "info",
        "rose",
        "gray",
        "mktfyPurple",
    ]),
    tableHead: PropTypes.arrayOf(PropTypes.string),
    tableData: PropTypes.arrayOf(PropTypes.object),
    handleRowClick: PropTypes.func,
    className: PropTypes.string,
    // tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

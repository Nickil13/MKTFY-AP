import {
    drawerWidth,
    transition,
    boxShadow,
    defaultFont,
    primaryColor,
    primaryBoxShadow,
    infoColor,
    successColor,
    warningColor,
    dangerColor,
    whiteColor,
    grayColor,
    blackColor,
    hexToRgb,
} from "assets/jss/material-dashboard-react.js";
import { font24 } from "assets/mktfy-styles";

const sidebarStyle = (theme) => ({
    drawerPaper: {
        border: "none",
        position: "fixed",
        top: "0",
        bottom: "0",
        left: "0",
        zIndex: "1",
        ...boxShadow,
        width: drawerWidth,
        [theme.breakpoints.up("md")]: {
            width: drawerWidth,
            position: "fixed",
            height: "100%",
        },
        [theme.breakpoints.down("sm")]: {
            width: drawerWidth,
            ...boxShadow,
            position: "fixed",
            display: "block",
            top: "0",
            height: "100vh",
            right: "0",
            left: "auto",
            zIndex: "1032",
            visibility: "visible",
            overflowY: "visible",
            borderTop: "none",
            textAlign: "left",
            paddingRight: "0px",
            paddingLeft: "0",
            transform: `translate3d(${drawerWidth}px, 0, 0)`,
            ...transition,
        },
    },

    logo: {
        position: "relative",
        padding: "61px 15px 30px 15px",
        marginBottom: "41px",
        zIndex: "4",
        "&:after": {
            content: '""',
            position: "absolute",
            bottom: "-30px",
            height: "1px",
            right: "15px",
            width: "100%",
            maxWidth: "220px",
            backgroundColor: "rgba(" + hexToRgb(grayColor[6]) + ", 0.3)",
        },
    },
    // logoLink: {
    //     ...defaultFont,
    //     textTransform: "uppercase",
    //     padding: "5px 0",
    //     display: "block",
    //     fontSize: "18px",
    //     textAlign: "left",
    //     fontWeight: "400",
    //     lineHeight: "30px",
    //     textDecoration: "none",
    //     backgroundColor: "transparent",
    //     "&,&:hover": {
    //         color: whiteColor,
    //     },
    // },

    logoImage: {
        width: "",
        display: "inline-block",
        maxHeight: "30px",
        marginLeft: "10px",
        marginRight: "15px",
    },
    img: {
        width: "138px",
        position: "absolute",
        verticalAlign: "middle",
        right: "61px",
        border: "0",
    },
    background: {
        position: "absolute",
        zIndex: "1",
        height: "100%",
        width: "100%",
        display: "block",
        top: "0",
        left: "0",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        "&:after": {
            position: "absolute",
            zIndex: "3",
            width: "100%",
            height: "100%",
            content: '""',
            display: "block",
            background: blackColor,
            opacity: ".8",
        },
    },
    list: {
        marginTop: "20px",
        paddingLeft: "0",
        paddingTop: "0",
        paddingBottom: "0",
        marginBottom: "0",
        listStyle: "none",
        position: "unset",
    },
    item: {
        position: "relative",
        display: "block",
        textDecoration: "none",
        "&:hover,&:focus,&:visited,&": {
            color: whiteColor,
        },
    },
    itemLink: {
        width: "auto",
        transition: "all 300ms linear",
        margin: "0px 15px 41px 0px",
        borderRadius: "14px",
        position: "relative",
        display: "block",
        padding: "12px 20px",
        backgroundColor: "transparent",
        ...defaultFont,
    },
    itemIcon: {
        width: "24px",
        height: "30px",
        fontSize: "24px",
        lineHeight: "30px",
        float: "left",
        marginRight: "15px",
        textAlign: "center",
        verticalAlign: "middle",
        color: "rgba(" + hexToRgb(whiteColor) + ", 0.8)",
    },

    itemText: {
        ...defaultFont,
        margin: "0",
        lineHeight: "30px",
        fontSize: font24,
        fontWeight: "400",
        color: whiteColor,
    },

    whiteFont: {
        color: whiteColor,
    },
    purple: {
        backgroundColor: primaryColor[0],
        ...primaryBoxShadow,
        "&:hover,&:focus": {
            backgroundColor: primaryColor[0],
            ...primaryBoxShadow,
        },
    },
    blue: {
        backgroundColor: infoColor[0],
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(infoColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(infoColor[0]) +
            ",.2)",
        "&:hover,&:focus": {
            backgroundColor: infoColor[0],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(infoColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(infoColor[0]) +
                ",.2)",
        },
    },
    green: {
        backgroundColor: successColor[0],
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(successColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(successColor[0]) +
            ",.2)",
        "&:hover,&:focus": {
            backgroundColor: successColor[0],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(successColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(successColor[0]) +
                ",.2)",
        },
    },
    orange: {
        backgroundColor: warningColor[0],
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(warningColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(warningColor[0]) +
            ",.2)",
        "&:hover,&:focus": {
            backgroundColor: warningColor[0],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(warningColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(warningColor[0]) +
                ",.2)",
        },
    },
    red: {
        backgroundColor: dangerColor[0],
        boxShadow:
            "0 12px 20px -10px rgba(" +
            hexToRgb(dangerColor[0]) +
            ",.28), 0 4px 20px 0 rgba(" +
            hexToRgb(blackColor) +
            ",.12), 0 7px 8px -5px rgba(" +
            hexToRgb(dangerColor[0]) +
            ",.2)",
        "&:hover,&:focus": {
            backgroundColor: dangerColor[0],
            boxShadow:
                "0 12px 20px -10px rgba(" +
                hexToRgb(dangerColor[0]) +
                ",.28), 0 4px 20px 0 rgba(" +
                hexToRgb(blackColor) +
                ",.12), 0 7px 8px -5px rgba(" +
                hexToRgb(dangerColor[0]) +
                ",.2)",
        },
    },
    sidebarWrapper: {
        position: "relative",
        marginLeft: "auto",
        height: "calc(100vh - 120px)",
        overflow: "auto",
        width: "255px",
        zIndex: "4",
        overflowScrolling: "touch",
    },
    activePro: {
        [theme.breakpoints.up("md")]: {
            position: "absolute",
            width: "100%",
            bottom: "13px",
        },
    },
});

export default sidebarStyle;

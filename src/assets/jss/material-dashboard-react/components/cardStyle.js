import {
    blackColor,
    whiteColor,
    hexToRgb,
} from "assets/jss/material-dashboard-react.js";
// import { cardShadow } from "assets/mktfy-styles";

const cardStyle = {
    card: {
        border: "0",
        marginBottom: "30px",
        marginTop: "30px",
        borderRadius: "6px",
        color: "rgba(" + hexToRgb(blackColor) + ", 0.87)",
        background: whiteColor,
        width: "100%",
        // boxShadow: cardShadow,
        boxShadow: "0 1px 4px 0 rgba(" + hexToRgb(blackColor) + ", 0.14)",
        position: "relative",
        display: "flex",
        flexDirection: "column",
        minWidth: "0",
        wordWrap: "break-word",
        fontSize: ".875rem",
        // "&.dashboard-card": {
        //     maxWidth: "270px",
        // },
    },
    cardPlain: {
        background: "transparent",
        boxShadow: "none",
    },
    cardProfile: {
        marginTop: "30px",
        textAlign: "center",
    },
    cardChart: {
        "& p": {
            marginTop: "0px",
            paddingTop: "0px",
        },
    },
};

export default cardStyle;

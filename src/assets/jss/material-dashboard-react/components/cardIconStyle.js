import {
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    goldCardHeader,
    grayColor,
} from "assets/jss/material-dashboard-react.js";

const cardIconStyle = {
    cardIcon: {
        "&$warningCardHeader,&$successCardHeader,&$dangerCardHeader,&$infoCardHeader,&$primaryCardHeader,&$roseCardHeader,&$goldCardHeader": {
            // borderRadius: "6px",
            borderRadius: "3px",
            backgroundColor: grayColor[0],
            padding: "15px",
            // marginTop: "-40px",
            marginTop: "-20px",
            marginRight: "15px",
            float: "left",
            // width: "100px",
            // height: "100px",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
        },
        // "& .card-icon_img": {
        //     width: "47px",
        //     height: "38px",
        // },
    },
    warningCardHeader,
    successCardHeader,
    dangerCardHeader,
    infoCardHeader,
    primaryCardHeader,
    roseCardHeader,
    goldCardHeader,
};

export default cardIconStyle;

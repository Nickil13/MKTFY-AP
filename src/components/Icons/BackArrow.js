import React from "react";
import { ReactComponent as ArrowSvg } from "assets/img/mktfy/icon_back.svg";
import PropTypes from "prop-types";

export default function BackArrow({ width }) {
    return (
        <div className={`${width}`}>
            <ArrowSvg />
        </div>
    );
}

BackArrow.propTypes = {
    width: PropTypes.string,
};

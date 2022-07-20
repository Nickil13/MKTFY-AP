import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as LogoSvg } from "assets/img/mktfy/logo.svg";

export default function Logo({ width, fill }) {
    return (
        <div className={`${width}`}>
            <LogoSvg className={`${fill}`} />
        </div>
    );
}

Logo.propTypes = {
    width: PropTypes.string,
    fill: PropTypes.string,
};

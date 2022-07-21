import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/icon_close.svg";
import BackArrow from "components/Icons/BackArrow";

export default function Wrapper({ goBack, children, closeable }) {
    let history = useHistory();

    return (
        <div
            className={`tw-relative tw-flex tw-flex-col tw-bg-white tw-my-auto tw-rounded-[10px] tw-shadow-modal tw-w-full tw-max-w-modal tw-py-15`}
        >
            {children}
            {closeable && (
                <span
                    className="tw-absolute tw-top-7 tw-right-7 tw-cursor-pointer"
                    onClick={() => history.push("/auth/login")}
                >
                    <CloseIcon />
                </span>
            )}
            {goBack && (
                <span
                    className="tw-absolute tw-top-7 tw-left-7 tw-cursor-pointer"
                    onClick={history.goBack}
                >
                    <BackArrow />
                </span>
            )}
        </div>
    );
}

Wrapper.propTypes = {
    goBack: PropTypes.bool,
    children: PropTypes.node,
    padding: PropTypes.string,
    closeable: PropTypes.bool,
};

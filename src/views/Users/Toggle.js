import React from "react";
import PropTypes from "prop-types";

export default function Toggle({ active, toggleActive }) {
    return (
        <div className="tw-flex tw-items-center tw-justify-center tw-w-14 tw-h-8 tw-bg-gray-400 tw-rounded-full">
            <div
                className={`${
                    active ? "tw-translate-x-1/2" : "-tw-translate-x-1/2"
                } tw-border-[0.5px] tw-border-gray-400 tw-bg-[#FBFBFBF4] tw-w-[25px] tw-h-[25px] tw-rounded-full tw-duration-200`}
                onClick={toggleActive}
            ></div>
        </div>
    );
}

Toggle.propTypes = {
    active: PropTypes.bool,
    toggleActive: PropTypes.func,
};

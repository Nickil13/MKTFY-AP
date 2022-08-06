import React from "react";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/icon_close.svg";
import PropTypes from "prop-types";

export default function UserListing({ img, active, showModal }) {
    return (
        <li className="tw-flex tw-h-[214px] tw-rounded-[10px] tw-overflow-hidden tw-bg-[#F4F4F5]">
            <img
                className="tw-object-cover tw-h-full tw-w-[350px] tw-flex-shrink-0"
                src={img}
                alt="frog"
            />
            <div className="tw-flex tw-flex-col tw-items-start tw-px-15 tw-py-12">
                <h4 className="tw-text-base tw-text-black tw-mb-5 tw-mt-0">
                    Microsoft Frog One X 1 TB ClimberPro
                </h4>
                <span className="tw-text-base tw-text-purple-500 tw-font-bold tw-mb-5 tw-inline">
                    $340.00
                </span>
                <span className="tw-font-semibold tw-text-xs tw-text-purple-500 tw-bg-[#A54BC033] tw-rounded tw-px-1.5">
                    USED
                </span>
            </div>
            {active && (
                <span
                    className="tw-flex tw-flex-col tw-justify-center tw-ml-auto tw-mr-15 tw-items-center tw-text-red tw-text-[18px] tw-font-semibold tw-cursor-pointer"
                    onClick={showModal}
                >
                    <CloseIcon className="tw-fill-red tw-mb-2.5" />
                    Delete
                </span>
            )}
        </li>
    );
}
UserListing.propTypes = {
    img: PropTypes.string,
    active: PropTypes.bool,
    showModal: PropTypes.func,
};

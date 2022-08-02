import React from "react";
import PropTypes from "prop-types";

export default function DetailsCell({ icon, title, children }) {
    return (
        <div className="tw-p-6 tw-pb-[53px] tw-bg-white tw-rounded-[10px] tw-shadow-btn">
            <h4 className="tw-flex tw-items-center tw-mt-0 tw-text-purple-400 tw-font-semibold tw-text-[21px]">
                <img
                    src={icon}
                    className="tw-h-5 tw-w-5 tw-mr-4"
                    alt="user details icon"
                />
                {title}
            </h4>
            <div className="tw-text-gray-400 tw-text-base-lg tw-ml-9">
                {children}
            </div>
        </div>
    );
}

DetailsCell.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    children: PropTypes.node,
};

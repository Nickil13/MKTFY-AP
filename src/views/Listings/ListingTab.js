import React from "react";
import PropTypes from "prop-types";

export default function ListingTab({ children, active, onClick }) {
    return (
        <button
            className={`${
                active
                    ? "tw-border-b-[5px] tw-border-b-purple-100 tw-text-purple-400 tw-pr-10 tw-mr-6"
                    : "tw-text-gray-400 tw-border-none tw-mr-16 tw-pr-0"
            }  tw-border-x-0 tw-border-t-0 tw-bg-transparent tw-font-semibold tw-text-[28px] tw-pl-0 tw-cursor-pointer`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

ListingTab.propTypes = {
    children: PropTypes.node,
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

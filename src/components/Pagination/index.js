import React from "react";
import { ReactComponent as ChevronLeft } from "assets/img/mktfy/chevron-down.svg";
//import PropTypes from "prop-types";

export default function Pagination() {
    return (
        <div className="tw-inline-flex tw-items-center tw-border-gray-footer-border tw-border-solid tw-border-[0.5px] tw-rounded-[10px] tw-self-end tw-h-[48px] tw-mt-5">
            <div className="tw-p-3">
                <ChevronLeft className="tw-w-1.4 tw-h-3 tw-stroke-purple-100 tw-rotate-90 " />
            </div>
            <div className="tw-border-gray-footer-border tw-border-solid tw-border-[0.5px] tw-border-y-transparent tw-h-full tw-box-border tw-bg-[#F4F4F5] tw-text-gray-600 tw-text-[21px] tw-py-2.5 tw-px-7">
                1
            </div>
            <div className="tw-p-3">
                <ChevronLeft className="tw-w-1.4 tw-h-3 tw-stroke-purple-100 -tw-rotate-90 " />
            </div>
        </div>
    );
}

// Pagination.propTypes = {
//     currentPage: PropTypes.string,
//     totalPages: PropTypes.string
// };

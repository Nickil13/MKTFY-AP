import React from "react";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/icon_close.svg";
import { ReactComponent as ConfirmSoldIcon } from "assets/img/mktfy/check-square.svg";
import PropTypes from "prop-types";
import { formatPrice } from "utils/helpers";
import { modalTitles } from "data/variables";

export default function UserListing({
    uploadUrls,
    prodName,
    price,
    condition,
    status,
    onClick,
    setModalTitle,
    className,
}) {
    return (
        <li className={`tw-user-listing-card ${className}`}>
            <img
                className="tw-object-cover tw-h-full tw-max-h-[300px] lg:tw-w-[350px] tw-flex-shrink-0"
                src={uploadUrls?.length > 0 ? uploadUrls[0] : []}
                alt={prodName}
            />
            <div className="tw-relative tw-flex tw-flex-col xsm:tw-flex-row lg:tw-justify-between tw-w-full tw-py-12 tw-px-15 tw-box-border">
                <div className="tw-flex tw-flex-col tw-items-start tw-flex-shrink-0 tw-pr-15 tw-py-6 xsm:tw-py-0">
                    <h4 className="tw-text-base tw-text-black tw-mb-5 tw-mt-0">
                        {prodName}
                    </h4>
                    <span className="tw-text-base tw-text-purple-500 tw-font-bold tw-mb-5 tw-inline">
                        {formatPrice(price)}
                    </span>
                    <span className="tw-font-semibold tw-text-xs tw-text-purple-500 tw-bg-[#A54BC033] tw-rounded tw-px-1.5 tw-uppercase">
                        {condition}
                    </span>
                </div>
                <div className="tw-flex tw-justify-between tw-w-full tw-items-center">
                    {status === "pending" && (
                        <span className="tw-absolute tw-top-4 tw-right-4 md:tw-static tw-text-gold-200 tw-bg-[#FFBA0030] tw-rounded tw-px-1.5 tw-py-0.5 tw-text-base tw-font-semibold tw-mr-4 lg:tw-mr-44 tw-ml-auto">
                            PENDING STATE
                        </span>
                    )}
                    <div className="tw-flex xsm:tw-ml-auto">
                        {status === "pending" && (
                            <button
                                className="tw-flex tw-flex-col tw-items-center tw-border-none tw-bg-transparent tw-text-green tw-text-[18px] tw-font-semibold tw-cursor-pointer tw-mr-9"
                                onClick={() => {
                                    onClick();
                                    setModalTitle(modalTitles.CONFIRM_LISTING);
                                }}
                            >
                                <ConfirmSoldIcon className="tw-mb-2.5" />
                                Confirm Sold
                            </button>
                        )}
                        {(status === "active" || status === "pending") && (
                            <button
                                className="tw-flex tw-flex-col tw-justify-center tw-items-center 
                                tw-border-none tw-bg-transparent
                                tw-text-red tw-text-[18px] tw-font-semibold tw-cursor-pointer"
                                onClick={() => {
                                    if (status === "pending") {
                                        setModalTitle(
                                            modalTitles.CANCEL_LISTING
                                        );
                                    }
                                    onClick();
                                }}
                            >
                                <CloseIcon className="tw-fill-red tw-mb-2.5" />
                                Delete
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </li>
    );
}
UserListing.propTypes = {
    uploadUrls: PropTypes.arrayOf(PropTypes.string),
    prodName: PropTypes.string,
    price: PropTypes.number,
    condition: PropTypes.string,
    status: PropTypes.string,
    onClick: PropTypes.func,
    setModalTitle: PropTypes.func,
    className: PropTypes.string,
};

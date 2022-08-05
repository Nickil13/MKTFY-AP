import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ChevronLeft } from "assets/img/mktfy/chevron-down.svg";
import BlockIcon from "assets/img/mktfy/slash.svg";
import BagIcon from "assets/img/mktfy/shopping-bag.svg";
import SalesIcon from "assets/img/mktfy/dollar-sign-purple.svg";
import DetailsCell from "./DetailsCell";
import yellowFrogImage from "assets/img/mktfy/dummyImages/frog.jpg";
import greenFrogImage from "assets/img/mktfy/dummyImages/frog2.jpg";
import blueFrogImage from "assets/img/mktfy/dummyImages/frog3.jpg";

import droneImage from "assets/img/mktfy/dummyImages/drone.jpg";
import bbImage from "assets/img/mktfy/dummyImages/bb8.jpg";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/icon_close.svg";
import Toggle from "./Toggle";
import Pagination from "./Pagination";
import DeleteListingModal from "components/Modal/DeleteListingModal";
const UserListing = ({ img, active, showModal }) => {
    return (
        <li className="tw-flex tw-h-[214px] tw-rounded-[10px] tw-overflow-hidden tw-bg-[#F4F4F5]">
            <img
                className="tw-object-cover tw-h-full tw-w-[350px]"
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
                <span className="tw-font-semibold tw-text-xs tw-bg-[#A54BC033] tw-rounded tw-px-1.5">
                    USED
                </span>
            </div>
            {active && (
                <span
                    className="tw-flex tw-flex-col tw-justify-center tw-ml-auto tw-mr-15 tw-items-center tw-text-red tw-text-[18px] tw-font-semibold tw-cursor-pointer"
                    onClick={showModal}
                >
                    <CloseIcon className="tw-fill-red" />
                    Delete
                </span>
            )}
        </li>
    );
};
UserListing.propTypes = {
    img: PropTypes.string,
    active: PropTypes.bool,
    showModal: PropTypes.func,
};

export default function User({ setUserId }) {
    const [showActiveListings, setShowActiveListings] = useState(true);
    const [isBlocked, setIsBlocked] = useState(false);
    const [modalShowing, setModalShowing] = useState(false);

    React.useEffect(() => {
        console.log("modal toggled");
    }, [modalShowing]);

    return (
        <div className="tw-flex tw-flex-col tw-min-h-ap">
            {/* Header */}
            <div>
                <div className="tw-relative tw-flex tw-flex-col tw-items-center tw-bg-purple-500 tw-h-[276px] tw-rounded-[10px] tw-shadow-btn tw-text-white">
                    <ChevronLeft
                        className="tw-absolute tw-top-7 tw-left-7 tw-h-7 tw-w-7 tw-stroke-white tw-rotate-90 tw-cursor-pointer"
                        onClick={() => setUserId("")}
                    />
                    <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0 tw-mb-5 tw-pt-12">
                        Terry Gomez
                    </h3>
                    <span className="tw-text-[21px]">Calgary, AB</span>
                </div>
                {/* Details */}
                <div className="tw-grid tw-grid-cols-3 tw-gap-4 tw-mt-2.5">
                    <DetailsCell title="Block/Unblock User" icon={BlockIcon}>
                        <div className="tw-flex">
                            <span className="tw-mr-6">Block</span>
                            <Toggle
                                active={isBlocked}
                                toggleActive={() => setIsBlocked(!isBlocked)}
                            />
                        </div>
                    </DetailsCell>
                    <DetailsCell title="Total Purchases" icon={BagIcon}>
                        <span className="tw-font-semibold tw-text-[32px]">
                            120
                        </span>{" "}
                        Bought Items
                    </DetailsCell>
                    <DetailsCell title="Total Sales" icon={SalesIcon}>
                        <span className="tw-font-semibold tw-text-[32px]">
                            120
                        </span>{" "}
                        Sale Items
                    </DetailsCell>
                </div>
            </div>
            <div className="tw-flex tw-flex-col tw-bg-white tw-mt-6 tw-pt-8 tw-px-9 tw-pb-15 tw-shadow-[0px_1px_0px_#00000024] tw-rounded-[10px] tw-grow">
                <div className="tw-mb-8">
                    <button
                        className={`${
                            showActiveListings
                                ? "tw-text-purple-400 tw-underline"
                                : "tw-text-gray-400"
                        }  tw-border-none tw-bg-transparent tw-font-semibold tw-text-[28px] tw-mr-16 tw-cursor-pointer`}
                        onClick={() => setShowActiveListings(true)}
                    >
                        User Listings
                    </button>
                    <button
                        className={`${
                            !showActiveListings
                                ? "tw-text-purple-400 tw-underline"
                                : "tw-text-gray-400"
                        }  tw-border-none tw-bg-transparent tw-font-semibold tw-text-[28px] tw-cursor-pointer`}
                        onClick={() => setShowActiveListings(false)}
                    >
                        Purchased Listings
                    </button>
                </div>
                {showActiveListings ? (
                    <ul className="tw-flex tw-flex-col tw-list-none tw-pl-0 tw-gap-5">
                        <UserListing
                            img={yellowFrogImage}
                            showModal={() => setModalShowing(true)}
                            active
                        />
                        <UserListing
                            img={greenFrogImage}
                            showModal={() => setModalShowing(true)}
                            active
                        />
                        <UserListing
                            img={blueFrogImage}
                            showModal={() => setModalShowing(true)}
                            active
                        />
                    </ul>
                ) : (
                    <ul className="tw-flex tw-flex-col  tw-list-none tw-pl-0 tw-rounded-[10px] tw-gap-5">
                        <UserListing img={droneImage} />
                        <UserListing img={bbImage} />
                    </ul>
                )}
                <Pagination />
            </div>
            {/* Delete Listing Modal */}
            {modalShowing && (
                <div className="tw-modal-container">
                    <DeleteListingModal
                        closeModal={() => setModalShowing(false)}
                    />
                </div>
            )}
        </div>
    );
}

User.propTypes = {
    setUserId: PropTypes.func,
};

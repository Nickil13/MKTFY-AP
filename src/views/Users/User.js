import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ChevronLeft } from "assets/img/mktfy/chevron-down.svg";
import BlockIcon from "assets/img/mktfy/slash.svg";
import BagIcon from "assets/img/mktfy/shopping-bag.svg";
import SalesIcon from "assets/img/mktfy/dollar-sign-purple.svg";
import UserDetailsCell from "../../components/User/UserDetailsCell";
import yellowFrogImage from "assets/img/mktfy/dummyImages/frog.jpg";
import greenFrogImage from "assets/img/mktfy/dummyImages/frog2.jpg";
import blueFrogImage from "assets/img/mktfy/dummyImages/frog3.jpg";

import droneImage from "assets/img/mktfy/dummyImages/drone.jpg";
import bbImage from "assets/img/mktfy/dummyImages/bb8.jpg";
import Toggle from "../../components/Toggle";
import Pagination from "../../components/Pagination";
import { ListingModal } from "components/Modal";
import { UserListing } from "components/User";
import ListingTab from "views/Listings/ListingTab";

export default function User({ setUserId }) {
    const [showActiveListings, setShowActiveListings] = useState(true);
    const [isBlocked, setIsBlocked] = useState(false);
    const [modalShowing, setModalShowing] = useState(false);

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
                    <UserDetailsCell
                        title="Block/Unblock User"
                        icon={BlockIcon}
                    >
                        <div className="tw-flex">
                            <span className="tw-mr-6">Block</span>
                            <Toggle
                                active={isBlocked}
                                toggleActive={() => setIsBlocked(!isBlocked)}
                            />
                        </div>
                    </UserDetailsCell>
                    <UserDetailsCell title="Total Purchases" icon={BagIcon}>
                        <span className="tw-font-semibold tw-text-[32px]">
                            120
                        </span>{" "}
                        Bought Items
                    </UserDetailsCell>
                    <UserDetailsCell title="Total Sales" icon={SalesIcon}>
                        <span className="tw-font-semibold tw-text-[32px]">
                            120
                        </span>{" "}
                        Sale Items
                    </UserDetailsCell>
                </div>
            </div>
            <div className="tw-flex tw-flex-col tw-bg-white tw-mt-6 tw-pt-8 tw-px-9 tw-pb-15 tw-shadow-[0px_1px_0px_#00000024] tw-rounded-[10px] tw-grow">
                <div className="tw-mb-8">
                    <ListingTab
                        active={showActiveListings}
                        onClick={() => setShowActiveListings(true)}
                    >
                        User Listings
                    </ListingTab>
                    <ListingTab
                        active={!showActiveListings}
                        onClick={() => setShowActiveListings(false)}
                    >
                        Purchased Listings
                    </ListingTab>
                </div>
                {showActiveListings ? (
                    <ul className="tw-flex tw-flex-col tw-list-none tw-pl-0 tw-gap-5">
                        <UserListing
                            images={[yellowFrogImage]}
                            showModal={() => setModalShowing(true)}
                            status="active"
                        />
                        <UserListing
                            images={[greenFrogImage]}
                            showModal={() => setModalShowing(true)}
                            status="active"
                        />
                        <UserListing
                            images={[blueFrogImage]}
                            showModal={() => setModalShowing(true)}
                            status="active"
                        />
                    </ul>
                ) : (
                    <ul className="tw-flex tw-flex-col  tw-list-none tw-pl-0 tw-rounded-[10px] tw-gap-5">
                        <UserListing images={[droneImage]} />
                        <UserListing images={[bbImage]} />
                    </ul>
                )}
                <Pagination />
            </div>
            {/* Delete Listing Modal */}
            {modalShowing && (
                <div className="tw-modal-container">
                    <ListingModal closeModal={() => setModalShowing(false)} />
                </div>
            )}
        </div>
    );
}

User.propTypes = {
    setUserId: PropTypes.func,
};

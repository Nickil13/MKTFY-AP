import React, { useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as ChevronLeft } from "assets/img/mktfy/chevron-down.svg";
import BlockIcon from "assets/img/mktfy/slash.svg";
import BagIcon from "assets/img/mktfy/shopping-bag.svg";
import SalesIcon from "assets/img/mktfy/dollar-sign-purple.svg";
import UserDetailsCell from "../../components/User/UserDetailsCell";
import Toggle from "../../components/Toggle";
import Pagination from "../../components/Pagination";
import { ListingModal } from "components/Modal";
import { UserListing } from "components/User";
import ListingTab from "views/Listings/ListingTab";
import { getUserDetails } from "actions/user";
import { getUserActiveListings } from "actions/user";
import { getUserPurchasedListings } from "actions/user";
import { deleteUserListing } from "actions/user";

export default function User({ setUserId, userId }) {
    const [user, setUser] = useState(null);
    const [activeListings, setActiveListings] = useState([]);
    const [purchasedListings, setPurchasedListings] = useState([]);
    const [showActiveListings, setShowActiveListings] = useState(true);
    const [isBlocked, setIsBlocked] = useState(false);
    const [modalShowing, setModalShowing] = useState(false);
    const [selectedListing, setSelectedListing] = useState(null);

    React.useEffect(() => {
        if (!user || user.id !== userId) {
            getUserDetails(userId).then((res) => {
                if (res) {
                    setUser(res);
                }
            });
        }
        if (activeListings.length === 0) {
            getUserActiveListings(userId).then((res) => {
                if (res) {
                    setActiveListings(res);
                }
            });
        }

        if (purchasedListings.length === 0) {
            getUserPurchasedListings(userId).then((res) => {
                if (res) {
                    setPurchasedListings(res);
                }
            });
        }
    }, []);

    const onListingClick = (listing) => {
        setSelectedListing(listing);
        setModalShowing(true);
    };

    const handleDeleteListing = (listing) => {
        // delete listing in API
        deleteUserListing(listing.id).then((res) => {
            console.log(res);
        });
        // delete in state
        const updatedListings = [...activeListings];
        setActiveListings(
            updatedListings.filter((newListing) => newListing.id !== listing.id)
        );

        setModalShowing(false);
    };
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
                        {user?.fullName}
                    </h3>
                    <span className="tw-text-[21px]">{`${user?.city}, AB`}</span>
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
                            {user?.numberOfPurchases}
                        </span>{" "}
                        {`Item${
                            user?.numberOfPurchases !== 1 ? "s" : ""
                        } Bought`}
                    </UserDetailsCell>
                    <UserDetailsCell title="Total Sales" icon={SalesIcon}>
                        <span className="tw-font-semibold tw-text-[32px]">
                            {user?.totalSales}
                        </span>{" "}
                        Profit
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
                        {activeListings.length > 0 ? (
                            activeListings.map((listing) => {
                                return (
                                    <UserListing
                                        {...listing}
                                        onClick={() => onListingClick(listing)}
                                        status="active"
                                        key={listing.id}
                                    />
                                );
                            })
                        ) : (
                            <p>The user has not created any listings.</p>
                        )}
                    </ul>
                ) : (
                    <ul className="tw-flex tw-flex-col  tw-list-none tw-pl-0 tw-rounded-[10px] tw-gap-5">
                        {purchasedListings.length > 0 ? (
                            purchasedListings.map((listing) => {
                                return (
                                    <UserListing
                                        {...listing}
                                        onClick={() => onListingClick(listing)}
                                        key={listing.id}
                                    />
                                );
                            })
                        ) : (
                            <p>The user has not made any purchases.</p>
                        )}
                    </ul>
                )}
                <Pagination />
            </div>
            {/* Delete Listing Modal */}
            {modalShowing && (
                <div className="tw-modal-container">
                    <ListingModal
                        closeModal={() => setModalShowing(false)}
                        listing={selectedListing}
                        onConfirm={() => handleDeleteListing(selectedListing)}
                    />
                </div>
            )}
        </div>
    );
}

User.propTypes = {
    setUserId: PropTypes.func,
    userId: PropTypes.string,
};

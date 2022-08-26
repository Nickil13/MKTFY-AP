import React, { useState } from "react";
import { UserListing } from "components/User";
import Pagination from "components/Pagination";
import { ListingModal } from "components/Modal";
import { modalTitles } from "data/variables";
import ListingTab from "./ListingTab";
import { deleteUserListing } from "actions/user";
import { getListings, confirmListing } from "actions/listings";

export default function Listings() {
    const [showingActive, setShowingActive] = useState(true);
    const [activeListings, setActiveListings] = useState([]);
    const [pendingListings, setPendingListings] = useState([]);
    const [selectedListing, setSelectedListing] = useState(null);

    const [modalShowing, setModalShowing] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    React.useEffect(() => {
        if (pendingListings.length === 0 || activeListings.length === 0) {
            getListings().then((res) => {
                if (res) {
                    const newActiveListings = res.filter(
                        (listing) => listing.status === "Active"
                    );
                    const newPendingListings = res.filter(
                        (listing) => listing.status === "Pending"
                    );
                    if (newActiveListings.length > 0) {
                        setActiveListings(newActiveListings);
                    }
                    if (newPendingListings.length > 0) {
                        setPendingListings(newPendingListings);
                    }
                }
            });
        }
    }, []);

    const onListingClick = (listing) => {
        setSelectedListing(listing);
        setModalShowing(true);
    };

    const handleDeleteListing = (listing) => {
        deleteUserListing(listing.id).then(() => {
            if (listing.status === "Active") {
                const updatedListings = [...activeListings];
                setActiveListings(
                    updatedListings.filter(
                        (newListing) => newListing.id !== listing.id
                    )
                );
            }
            if (listing.status === "Pending") {
                const updatedListings = [...pendingListings];
                setPendingListings(
                    updatedListings.filter(
                        (newListing) => newListing.id !== listing.id
                    )
                );
            }
            setModalShowing(false);
        });
    };

    const handleConfirmListing = (listing) => {
        confirmListing(listing.id).then((res) => {
            if (res) {
                const updatedListings = [...pendingListings];
                setPendingListings(
                    updatedListings.filter(
                        (newListing) => newListing.id !== listing.id
                    )
                );
                setModalShowing(false);
            }
        });
    };

    return (
        <div>
            <div className="tw-mb-10">
                <ListingTab
                    active={showingActive}
                    onClick={() => setShowingActive(true)}
                >
                    Active
                </ListingTab>
                <ListingTab
                    active={!showingActive}
                    onClick={() => setShowingActive(false)}
                >
                    Pending
                </ListingTab>
            </div>
            <div className="tw-flex tw-flex-col">
                {showingActive ? (
                    <ul className="tw-flex tw-flex-col tw-px-0 tw-mt-0 tw-gap-5">
                        {activeListings.length > 0 &&
                            activeListings.map((listing) => {
                                return (
                                    <UserListing
                                        {...listing}
                                        status="active"
                                        className="tw-bg-white tw-shadow-[0px_1px_0px_#00000024]"
                                        key={listing.id}
                                        onClick={() => onListingClick(listing)}
                                        setModalTitle={setModalTitle}
                                    />
                                );
                            })}
                    </ul>
                ) : (
                    <ul className="tw-flex tw-flex-col tw-px-0 tw-mt-0 tw-gap-5">
                        {pendingListings.length > 0 &&
                            pendingListings.map((listing) => {
                                return (
                                    <UserListing
                                        {...listing}
                                        status="pending"
                                        className="tw-bg-white tw-shadow-[0px_1px_0px_#00000024]"
                                        key={listing.id}
                                        onClick={() => onListingClick(listing)}
                                        setModalTitle={setModalTitle}
                                    />
                                );
                            })}
                    </ul>
                )}
                <Pagination />
            </div>
            {/* Update Listing Modal: Delete or Confirm Sold */}
            {modalShowing && (
                <div className="tw-modal-container">
                    {modalTitle === modalTitles.CANCEL_LISTING ||
                    showingActive ? (
                        <ListingModal
                            closeModal={() => setModalShowing(false)}
                            listing={selectedListing}
                            onConfirm={() =>
                                handleDeleteListing(selectedListing)
                            }
                        />
                    ) : (
                        <ListingModal
                            closeModal={() => setModalShowing(false)}
                            listing={selectedListing}
                            onConfirm={() => {
                                handleConfirmListing(selectedListing);
                            }}
                            confirmText="Confirm sold"
                        />
                    )}
                </div>
            )}
        </div>
    );
}

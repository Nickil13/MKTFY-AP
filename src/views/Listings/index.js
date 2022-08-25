import React, { useState } from "react";
import { UserListing } from "components/User";
import { dummyListings } from "data/dummyListings";
import Pagination from "components/Pagination";
import { ListingModal } from "components/Modal";
import { modalTitles } from "data/variables";
import ListingTab from "./ListingTab";

export default function Listings() {
    const [showingActive, setShowingActive] = useState(true);
    const [listings, setListings] = useState([]);
    const [modalShowing, setModalShowing] = useState(false);
    const [modalTitle, setModalTitle] = useState("");

    React.useEffect(() => {
        if (listings.length === 0) {
            setListings(dummyListings);
        }
    }, []);

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
                        {listings.length > 0 &&
                            listings.slice(0, 5).map((listing) => {
                                return (
                                    <UserListing
                                        {...listing}
                                        status="active"
                                        className="tw-bg-white tw-shadow-[0px_1px_0px_#00000024]"
                                        key={listing.id}
                                        onClick={() => setModalShowing(true)}
                                        setModalTitle={setModalTitle}
                                    />
                                );
                            })}
                    </ul>
                ) : (
                    <ul className="tw-flex tw-flex-col tw-px-0 tw-mt-0 tw-gap-5">
                        {listings.length > 0 &&
                            listings.slice(5, 10).map((listing) => {
                                return (
                                    <UserListing
                                        {...listing}
                                        status="pending"
                                        className="tw-bg-white tw-shadow-[0px_1px_0px_#00000024]"
                                        key={listing.id}
                                        onClick={() => setModalShowing(true)}
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
                            onConfirm={() => {
                                console.log("deleting listing");
                                setModalShowing(false);
                            }}
                        />
                    ) : (
                        <ListingModal
                            closeModal={() => setModalShowing(false)}
                            onConfirm={() => {
                                console.log("confirming listing");
                                setModalShowing(false);
                            }}
                            confirmText="Confirm sold"
                        />
                    )}
                </div>
            )}
        </div>
    );
}

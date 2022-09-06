import React, { useState } from "react";
import PropTypes from "prop-types";
import { ListingInput, Select } from "components/Input";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/orange_close-24.svg";
import { CITY_OPTIONS } from "data/variables";
import { CONDITIONS } from "data/variables";
import { CATEGORY_TYPES } from "data/variables";
import { formatPrice } from "utils/helpers";

export default function ListingModal({
    listing,
    closeModal,
    onConfirm,
    confirmText,
}) {
    const [productName, setProductName] = useState(listing?.prodName || "");
    const [description, setDescription] = useState(listing?.description || "");
    const [category, setCategory] = useState(listing?.category || "");
    const [condition, setCondition] = useState(listing?.condition || "");
    const [price, setPrice] = useState(
        (listing?.price && formatPrice(listing.price)) || ""
    );
    const [address, setAddress] = useState(listing?.address || "");
    const [city, setCity] = useState(listing?.city || "");

    return (
        <div className="tw-relative tw-flex tw-flex-col tw-bg-white tw-w-full tw-max-w-[690px] tw-rounded-[10px] tw-overflow-auto tw-max-h-[95vh]">
            {/* Main Image */}
            <img
                className="tw-w-full tw-rounded-t tw-object-cover tw-max-h-[494px]"
                src={
                    listing?.uploadUrls?.length > 0 ? listing.uploadUrls[0] : []
                }
                alt="listing"
            />
            {/* Additional, smaller images */}
            <div className="tw-p-5 tw-flex tw-gap-5 tw-mb-1">
                {listing?.uploadUrls?.length > 1 &&
                    listing.uploadUrls.slice(1, 5).map((image, index) => {
                        return (
                            <div
                                className="tw-h-[118px] tw-w-[118px] tw-rounded tw-overflow-hidden"
                                key={index}
                            >
                                <img
                                    className="tw-h-full tw-w-full tw-object-cover"
                                    src={image}
                                    alt="smaller listing"
                                />
                            </div>
                        );
                    })}
            </div>
            <form className="tw-p-5 tw-pb-6">
                <ListingInput
                    name="product name"
                    value={productName}
                    setValue={setProductName}
                    disabled
                />
                {/* Description */}
                <div className="tw-flex tw-flex-col tw-mb-4">
                    <label
                        className="tw-text-xs tw-text-[#313131] tw-mb-1.5"
                        htmlFor="description"
                    >
                        Description
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="5"
                        disabled
                        className="tw-input-base tw-bg-[#F4F4F54D] tw-resize-none tw-py-5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                {/* Category select */}
                <Select
                    name="category"
                    value={category}
                    setValue={setCategory}
                    options={CATEGORY_TYPES}
                    disabled
                />

                <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                    {/* Condition select */}
                    <Select
                        name="condition"
                        value={condition}
                        setValue={setCondition}
                        options={CONDITIONS}
                        disabled
                    />

                    {/* Price */}
                    <div className="tw-flex tw-flex-col tw-mb-4">
                        <label
                            className="tw-text-xs tw-text-[#313131] tw-mb-1.5"
                            htmlFor="price"
                        >
                            Price
                        </label>
                        <input
                            id="price"
                            name="price"
                            type="text"
                            disabled
                            className="tw-input-base tw-bg-[#F4F4F54D] tw-h-[54px]"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                {/* Address */}
                <ListingInput
                    name="address"
                    value={address}
                    setValue={setAddress}
                    disabled
                />
                {/* City select */}
                <Select
                    name="city"
                    value={city}
                    setValue={setCity}
                    options={CITY_OPTIONS}
                    disabled
                />
                <div className="tw-mt-9 tw-flex tw-gap-2.5">
                    <button
                        type="button"
                        className="tw-btn tw-w-full tw-bg-transparent tw-shadow-none tw-text-[#969696] tw-border tw-border-solid tw-border-[#969696] tw-h-[50px] tw-py-0"
                        onClick={closeModal}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        className="tw-btn-purple tw-w-full tw-h-[50px] tw-py-0"
                        onClick={onConfirm}
                    >
                        {confirmText}
                    </button>
                </div>
            </form>
            <CloseIcon
                className="tw-absolute tw-top-7 tw-right-7 tw-cursor-pointer"
                onClick={closeModal}
            />
        </div>
    );
}

ListingModal.propTypes = {
    closeModal: PropTypes.func,
    onConfirm: PropTypes.func,
    confirmText: PropTypes.string,
    listing: PropTypes.object,
};

ListingModal.defaultProps = {
    confirmText: "Delete",
};

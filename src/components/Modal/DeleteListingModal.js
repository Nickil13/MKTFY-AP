import React, { useState } from "react";
import PropTypes from "prop-types";
import { dummyListing } from "data/dummyListing";
import { ListingInput, Select } from "components/Input";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/orange_close-24.svg";
import { CITY_OPTIONS } from "data/variables";

export default function DeleteListingModal({ closeModal }) {
    const [productName, setProductName] = useState("Cat");
    const [description, setDescription] = useState(
        "A cat wrapped up in a beautiful scarf."
    );
    const [category, setCategory] = useState("electronics");
    const [condition, setCondition] = useState("used");
    const [price, setPrice] = useState("200.00");
    const [address, setAddress] = useState("123 kitty kat lane");
    const [city, setCity] = useState("Calgary");

    return (
        <div className="tw-relative tw-flex tw-flex-col tw-bg-white tw-w-full tw-max-w-[690px] tw-rounded-[10px] tw-overflow-auto tw-max-h-[95vh]">
            {/* Main Image */}
            <img
                className="tw-w-full tw-rounded-t tw-object-cover tw-max-h-[494px]"
                src={dummyListing.images[0]}
                alt="listing"
            />
            {/* Additional, smaller images */}
            <div className="tw-p-5 tw-flex tw-gap-5 tw-mb-1">
                <div className="tw-h-[118px] tw-w-[118px] tw-rounded tw-overflow-hidden">
                    <img
                        className="tw-h-full tw-w-fulltw-object-cover"
                        src={dummyListing.images[0]}
                        alt="smaller listing"
                    />
                </div>
                <div className="tw-h-[118px] tw-w-[118px] tw-rounded tw-overflow-hidden">
                    <img
                        className="tw-h-full tw-w-fulltw-object-cover"
                        src={dummyListing.images[0]}
                        alt="smaller listing"
                    />
                </div>
            </div>
            <form className="tw-p-5 tw-pb-6">
                <ListingInput
                    name="product name"
                    value={productName}
                    setValue={setProductName}
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
                        className="tw-input-base tw-bg-[#F4F4F54D] tw-resize-none tw-py-5"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                {/* Category select */}
                <div className="tw-flex tw-flex-col tw-mb-4">
                    <label
                        className="tw-text-xs tw-text-[#313131] tw-mb-1.5"
                        htmlFor="category"
                    >
                        Category
                    </label>
                    <input
                        id="category"
                        name="category"
                        className="tw-input-base tw-bg-[#F4F4F54D] tw-h-[54px]"
                        value={category}
                        setValue={(e) => setCategory(e.target.value)}
                    />
                </div>

                <div className="tw-grid tw-grid-cols-2 tw-gap-5">
                    {/* Condition select */}
                    <div className="tw-flex tw-flex-col tw-mb-4">
                        <label
                            className="tw-text-xs tw-text-[#313131] tw-mb-1.5"
                            htmlFor="condition"
                        >
                            Condition
                        </label>
                        <input
                            id="condition"
                            name="condition"
                            className="tw-input-base tw-bg-[#F4F4F54D]  tw-h-[54px]"
                            value={condition}
                            setValue={(e) => setCondition(e.target.value)}
                        />
                    </div>
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
                            className="tw-input-base tw-bg-[#F4F4F54D] tw-h-[54px]"
                            value={price}
                            setValue={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>

                {/* Address */}
                <ListingInput
                    name="address"
                    value={address}
                    setValue={setAddress}
                />
                {/* City select */}
                <Select
                    name="city"
                    value={city}
                    setValue={setCity}
                    options={CITY_OPTIONS}
                />
                <div className="tw-mt-9 tw-flex tw-gap-2.5">
                    <button className="tw-btn tw-w-full tw-bg-transparent tw-shadow-none tw-text-[#969696] tw-border tw-border-solid tw-border-[#969696] tw-h-[50px] tw-py-0">
                        Cancel
                    </button>
                    <button className="tw-btn-purple tw-w-full tw-h-[50px] tw-py-0">
                        Delete
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

DeleteListingModal.propTypes = {
    closeModal: PropTypes.func,
};

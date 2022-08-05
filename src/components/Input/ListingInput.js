import React from "react";
import PropTypes from "prop-types";

export default function ListingInput({ name, value, setValue }) {
    return (
        <div className="tw-flex tw-flex-col tw-mb-4">
            <label
                className="tw-text-xs tw-text-[#313131] tw-mb-1.5 tw-capitalize"
                htmlFor={name}
            >
                {name}
            </label>
            <input
                type="text"
                id={name}
                name={name}
                className="tw-input-base tw-bg-[#F4F4F54D] tw-h-[54px]"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
}

ListingInput.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
};

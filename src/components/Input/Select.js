import PropTypes from "prop-types";
import React, { useState, useRef, useEffect } from "react";
import { ReactComponent as DropdownArrow } from "assets/img/mktfy/dropdown.svg";

export default function Select({
    name,
    options,
    value,
    setValue,
    preselected,
    className,
    disabled,
}) {
    const [showOptions, setShowOptions] = useState(false);
    const select = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleOffClick);
        return () => document.removeEventListener("mousedown", handleOffClick);
    }, []);

    const handleOffClick = (e) => {
        if (select.current && !select.current.contains(e.target)) {
            setShowOptions(false);
        }
    };
    const handleOptionClick = (option) => {
        setValue(option);
        setShowOptions(false);
    };

    const toggleOptions = () => {
        if (!disabled) {
            setShowOptions(!showOptions);
        }
    };
    return (
        <div className={`tw-relative ${className} tw-mb-4`} ref={select}>
            <label htmlFor={name} className="tw-capitalize tw-text-[#313131]">
                {name}
            </label>
            <div className="tw-input-base tw-relative tw-cursor-pointer tw-text-ellipsis tw-overflow-hidden tw-whitespace-nowrap tw-p-0 tw-mt-1.5">
                <button
                    type="button"
                    aria-haspopup="listbox"
                    aria-expanded={toggleOptions}
                    className={`tw-input-base tw-w-full
                 tw-text-left tw-p-[16px] tw-border tw-rounded tw-bg-[#F4F4F54D] tw-capitalize ${
                     showOptions
                         ? "tw-border-purple-200"
                         : "tw-border-transparent"
                 }`}
                    onClick={toggleOptions}
                >
                    {value
                        ? value
                        : !preselected
                        ? `Select a ${name}`
                        : options[0]}
                </button>

                <DropdownArrow
                    className={`tw-absolute tw-top-1/2 tw--translate-y-1/2 tw-right-4 tw-pointer-events-none tw-fill-purple-400 ${
                        showOptions && "tw-rotate-180"
                    }`}
                />
            </div>
            {/* Select Options List */}
            <ul
                className={`tw-absolute tw-bg-white tw-w-full tw-top-full tw-l-0 tw-r-0 tw-z-10 tw-shadow-navbar tw-rounded-md tw-mt-1 tw-list-none tw-pl-0 ${
                    !showOptions && "tw-hidden"
                }`}
            >
                {options.length > 0 &&
                    options.map((option, index) => {
                        return (
                            <li
                                className={`tw-p-5 tw-cursor-pointer tw-hover:bg-beige-200 tw-capitalize tw-text-xs ${
                                    value === option && "tw-text-purple-100"
                                }`}
                                key={index}
                                onClick={() => handleOptionClick(option)}
                            >
                                {option}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}

Select.defaultProps = {
    options: [],
};

Select.propTypes = {
    name: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.string),
    phcolor: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    preselected: PropTypes.bool,
    className: PropTypes.string,
    disabled: PropTypes.bool,
};

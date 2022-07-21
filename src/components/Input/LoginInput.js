import React from "react";
import PropTypes from "prop-types";
// import { getMaxInputLength } from "../../utils/helpers";

export default function LoginInput({
    name,
    type,
    placeholder,
    value,
    setValue,
    lastchild,
    backgroundColor,
    errorMessage,
    invalid,
    onBlur,
}) {
    // const maxLength = React.useMemo(() => getMaxInputLength(name), [name]);
    return (
        <div className={`tw-flex tw-flex-col ${!lastchild && "tw-mb-4"}`}>
            <label
                className={`tw-capitalize tw-font-semibold tw-mb-3 tw-text-sm-16 ${
                    invalid && "tw-text-red"
                }`}
                htmlFor={name}
            >
                {name}
            </label>
            <input
                className={`tw-input tw-mb-2 tw-font-semibold tw-text-gray-500 ${backgroundColor} ${
                    invalid && "tw-border-red"
                }`}
                type={type}
                id={name}
                name={name}
                // maxLength={maxLength}
                value={value}
                placeholder={placeholder || `Your ${name}`}
                onChange={(e) => setValue(e.target.value)}
                onBlur={onBlur}
            />

            {errorMessage && (
                <span
                    className={`tw-text-xs ${
                        invalid ? "tw-text-red" : "tw-text-transparent"
                    }`}
                >
                    Your {name} is incorrect
                </span>
            )}
        </div>
    );
}

LoginInput.defaultProps = {
    name: "input",
    type: "text",
};

LoginInput.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    setValue: PropTypes.func,
    lastchild: PropTypes.bool,
    backgroundColor: PropTypes.string,
    errorMessage: PropTypes.bool,
    invalid: PropTypes.string,
    onBlur: PropTypes.func,
};

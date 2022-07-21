import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { ReactComponent as IconHide } from "assets/img/mktfy/icon_eye_hide.svg";
import { FaEye } from "react-icons/fa";

export default function PasswordInput({
    value,
    onChange,
    name,
    lastchild,
    errorMessage,
    onBlur,
    invalid,
}) {
    const inputRef = useRef(null);
    const [passwordShowing, setPasswordShowing] = useState(false);
    const toggleShowPassword = () => {
        setPasswordShowing(!passwordShowing);
        if (inputRef) {
            if (inputRef.current.type === "password") {
                inputRef.current.type = "text";
                inputRef.current.style.fontFamily = "Open Sans";
            } else {
                inputRef.current.type = "password";
                inputRef.current.style.fontFamily = "Verdana";
            }
        }
    };

    return (
        <div className={`tw-flex tw-flex-col ${!lastchild && "tw-mb-4"}`}>
            <label
                className="tw-capitalize tw-font-semibold tw-mb-3 tw-text-sm-16"
                htmlFor="password"
            >
                {name}
            </label>
            <div className="tw-relative">
                <input
                    className="tw-input tw-box-border tw-w-input tw-max-w-input tw-text-gray-600 tw-font-[Verdana] placeholder:tw-font-mktfy tw-mb-1 tw-px-5"
                    type="password"
                    id={name}
                    name={name}
                    value={value}
                    placeholder="Your password"
                    ref={inputRef}
                    onChange={onChange}
                    onBlur={onBlur}
                />
                {passwordShowing ? (
                    <FaEye
                        className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-5 tw-text-[22px] tw-cursor-pointer tw-text-gray-300"
                        onClick={toggleShowPassword}
                    />
                ) : (
                    <IconHide
                        className="tw-absolute tw-top-1/2 -tw-translate-y-1/2 tw-right-5 tw-w-6 tw-cursor-pointer tw-fill-gray-300"
                        onClick={toggleShowPassword}
                    />
                )}
            </div>

            {errorMessage && (
                <span
                    className={`tw-text-xs ${
                        invalid ? "tw-text-red" : "tw-text-transparent"
                    }`}
                >
                    Passwords do not match
                </span>
            )}
        </div>
    );
}

PasswordInput.defaultProps = {
    name: "password",
};

PasswordInput.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func,
    name: PropTypes.string,
    lastchild: PropTypes.bool,
    errorMessage: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    onBlur: PropTypes.func,
    invalid: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
};

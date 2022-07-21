import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import PropTypes from "prop-types";

export default function PasswordRequirement({
    children,
    requirement,
    lastchild,
}) {
    return (
        <div className={`tw-flex tw-items-center ${!lastchild && "tw-mb-3"}`}>
            <FaCheckCircle
                className={`${
                    requirement ? "tw-text-purple-200" : "tw-text-gray-100"
                } tw-w-5 tw-h-5 tw-mr-3`}
            />
            <span className="tw-text-gray-500">{children}</span>
        </div>
    );
}
PasswordRequirement.propTypes = {
    children: PropTypes.node,
    requirement: PropTypes.bool,
    lastchild: PropTypes.bool,
};

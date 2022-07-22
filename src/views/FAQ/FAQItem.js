import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PurpleArrow } from "assets/img/mktfy/Path 37931.svg";

export default function FAQItem({ title, id, setFAQId }) {
    return (
        <li
            className="tw-flex tw-justify-between tw-py-9 tw-pl-2 tw-pr-6 even:tw-bg-beige-200 odd:tw-border-b odd:tw-border-solid odd:tw-border-transparent odd:tw-border-b-gray-100 tw-text-[21px] first:tw-pt-0 tw-text-gray-600 tw-cursor-pointer"
            onClick={() => setFAQId(id)}
        >
            {title}
            <PurpleArrow />
        </li>
    );
}

FAQItem.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    setFAQId: PropTypes.func,
};

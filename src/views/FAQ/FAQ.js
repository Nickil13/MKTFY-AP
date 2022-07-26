import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { ReactComponent as ChevronLeft } from "assets/img/mktfy/chevron-down.svg";
import { modalTitles } from "variables/modalTitles";
import PropTypes from "prop-types";
import { deleteFAQ } from "actions/faq";
import { DELETE_FAQ } from "reducers/action-types";

export default function FAQ({ showModal, FAQId, state, setFAQId, dispatch }) {
    const FAQ = state.FAQs?.find((faq) => faq.id === FAQId) || null;

    const handleEditFAQ = () => {
        showModal(modalTitles.EDIT_FAQ);
    };

    const handleDeleteFAQ = () => {
        deleteFAQ(FAQId).then((res) => {
            if (res) {
                const updatedFAQs = state.FAQs.filter(
                    (faq) => faq.id !== FAQId
                );
                dispatch({ type: DELETE_FAQ, payload: updatedFAQs });
            }
        });
        setFAQId("");
    };

    return (
        <Card className="tw-min-h-ap">
            <CardHeader
                icon
                className={`tw-flex tw-justify-between  tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-6 tw-py-10 -tw-top-14  tw-shadow-card-header`}
            >
                <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0">
                    <ChevronLeft
                        className="tw-mr-10 tw-h-7 tw-fill-white tw-rotate-90 tw-cursor-pointer"
                        onClick={() => setFAQId("")}
                    />
                    {FAQ?.title}
                </h3>
                <div>
                    <button
                        className="tw-bg-transparent tw-border-none tw-mr-10 tw-text-base tw-font-bold tw-text-white tw-cursor-pointer"
                        onClick={handleEditFAQ}
                    >
                        Edit
                    </button>
                    <button
                        className="tw-bg-transparent tw-border-none tw-mr-10 tw-text-base tw-font-bold tw-text-white tw-cursor-pointer"
                        onClick={handleDeleteFAQ}
                    >
                        Delete
                    </button>
                </div>
            </CardHeader>
            <CardBody className="tw-text-[21px] tw-leading-7 tw-pl-16 tw-pr-14 tw-text-black">
                {FAQ?.description}
            </CardBody>
        </Card>
    );
}

FAQ.propTypes = {
    FAQId: PropTypes.string,
    setFAQId: PropTypes.func,
    showModal: PropTypes.func,
    state: PropTypes.object,
    dispatch: PropTypes.func,
};

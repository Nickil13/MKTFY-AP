import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { dummyFAQs } from "data/dummyFAQs";
import FAQItem from "./FAQItem";
import { modalTitles } from "variables/modalTitles";
import { useModalContext } from "context/ModalContext";

export default function FAQsPage() {
    const { showModal } = useModalContext();
    const handleAddFAQ = () => {
        showModal(modalTitles.ADD_FAQ);
    };
    return (
        <Card className="tw-min-h-ap">
            <CardHeader
                icon
                className={`tw-flex tw-justify-between  tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-6 tw-py-10 -tw-top-14  tw-shadow-card-header`}
            >
                <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0">
                    Frequently Asked Questions
                </h3>
                <button
                    className="tw-btn tw-bg-gold-200 tw-w-[185px]"
                    onClick={handleAddFAQ}
                >
                    Add
                </button>
            </CardHeader>
            <CardBody className="tw-list-none tw-pt-0 tw-pl-9 tw-pr-14">
                {dummyFAQs.map((faq, index) => {
                    return <FAQItem key={index} {...faq} />;
                })}
            </CardBody>
        </Card>
    );
}

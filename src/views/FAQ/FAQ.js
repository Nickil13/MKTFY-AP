import React from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { dummyFAQs } from "data/dummyFAQs";
import { useParams, useHistory } from "react-router-dom";
import { ReactComponent as ChevronLeft } from "assets/img/mktfy/chevron-down.svg";

export default function FAQ() {
    const { id } = useParams();
    let history = useHistory();
    const currentFAQ = id ? dummyFAQs.find((faq) => faq.id === id) : {};

    const handleEditFAQ = () => {
        console.log("Editing FAQ");
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
                        onClick={history.goBack}
                    />
                    {currentFAQ && currentFAQ.title}
                </h3>
                <button
                    className="tw-bg-transparent tw-border-none tw-mr-10 tw-text-base tw-font-bold tw-text-white "
                    onClick={handleEditFAQ}
                >
                    Edit
                </button>
            </CardHeader>
            <CardBody className="tw-text-[21px] tw-leading-7 tw-pl-16 tw-pr-14 ">
                {currentFAQ.description}
            </CardBody>
        </Card>
    );
}

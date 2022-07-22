import React, { useState } from "react";
import { EditFAQModal, AddFAQModal } from "components/Modal";
import { modalTitles } from "variables/modalTitles";
import FAQ from "./FAQ";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { dummyFAQs } from "data/dummyFAQs";
import FAQItem from "./FAQItem";

export default function FAQsRoutes() {
    const [FAQId, setFAQId] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalShowing, setModalShowing] = useState(false);

    const showModal = (title) => {
        setModalShowing(true);
        setModalTitle(title);
        console.log(`Opening ${title} modal.`);
    };
    const closeModal = () => {
        setModalShowing(false);
        setModalTitle("");
    };

    const handleAddFAQ = () => {
        showModal(modalTitles.ADD_FAQ);
    };

    // useEffect(() => {
    //     if (modalShowing) {
    //         document.body.style.overflow = "hidden";
    //     } else {
    //         document.body.style.overflow = "visible";
    //     }
    // }, [modalShowing]);

    return (
        <div className="tw-min-h-ap">
            {!FAQId ? (
                <Card className="tw-min-h-ap">
                    <CardHeader
                        icon
                        className={`tw-flex tw-justify-between tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-6 tw-py-10 -tw-top-14  tw-shadow-card-header`}
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
                            return (
                                <FAQItem
                                    key={index}
                                    {...faq}
                                    setFAQId={setFAQId}
                                />
                            );
                        })}
                    </CardBody>
                </Card>
            ) : (
                <FAQ showModal={showModal} FAQId={FAQId} setFAQId={setFAQId} />
            )}

            {modalShowing && (
                <div className="tw-fixed tw-flex tw-items-center md:tw-pl-drawer tw-justify-center tw-inset-0 tw-bg-[#000000]/20 tw-z-[9999]">
                    {/* Add Question Modal */}
                    {modalTitle === modalTitles.ADD_FAQ && (
                        <AddFAQModal closeModal={closeModal} FAQId={FAQId} />
                    )}
                    {/* Edit Question Modal */}
                    {modalTitle === modalTitles.EDIT_FAQ && (
                        <EditFAQModal closeModal={closeModal} FAQId={FAQId} />
                    )}
                </div>
            )}
        </div>
    );
}

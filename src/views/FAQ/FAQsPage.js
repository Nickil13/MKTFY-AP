import React, { useEffect, useState } from "react";
import { EditFAQModal, AddFAQModal } from "components/Modal";
import { modalTitles } from "data/variables";
import FAQ from "./FAQ";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

import FAQItem from "./FAQItem";
import { getFAQs } from "actions/faq";
import { createFAQ, editFAQ, deleteFAQ } from "actions/faq";

export default function FAQsPage() {
    const [FAQId, setFAQId] = useState("");
    const [modalTitle, setModalTitle] = useState("");
    const [modalShowing, setModalShowing] = useState(false);
    const [FAQs, setFAQs] = useState([]);
    const currentFAQ = FAQs.find((faq) => faq.id === FAQId) || null;

    useEffect(() => {
        if (FAQs.length === 0) {
            getFAQs().then((res) => {
                if (res) {
                    setFAQs(res);
                }
            });
        }
    }, []);

    const handleAddFAQ = (title, description) => {
        createFAQ(title, description).then((res) => {
            if (res) {
                const newFAQs = [{ title, description }, ...FAQs];
                setFAQs(newFAQs);
            }
        });
    };

    const handleEditFAQ = (FAQId, question, answer) => {
        editFAQ(FAQId, question, answer).then((res) => {
            if (res) {
                const updatedFAQs = FAQs.map((faq) => {
                    if (faq.id === res.id) {
                        return res;
                    } else {
                        return faq;
                    }
                });
                setFAQs(updatedFAQs);
            }
        });
    };

    const handleDeleteFAQ = (FAQId) => {
        deleteFAQ(FAQId).then((res) => {
            if (res) {
                const updatedFAQs = FAQs.filter((faq) => faq.id !== FAQId);
                setFAQs(updatedFAQs);
            }
        });
    };

    const showModal = (title) => {
        setModalShowing(true);
        setModalTitle(title);
        console.log(`Opening ${title} modal.`);
    };
    const closeModal = () => {
        setModalShowing(false);
        setModalTitle("");
    };

    return (
        <div className="tw-min-h-ap tw-pt-7">
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
                            onClick={() => showModal(modalTitles.ADD_FAQ)}
                        >
                            Add
                        </button>
                    </CardHeader>
                    <CardBody className="tw-list-none tw-pt-0 tw-pl-9 tw-pr-14 tw-pb-15">
                        {FAQs.length > 0 ? (
                            FAQs.map((faq, index) => {
                                return (
                                    <FAQItem
                                        key={index}
                                        {...faq}
                                        setFAQId={setFAQId}
                                    />
                                );
                            })
                        ) : (
                            <p>No FAQs found.</p>
                        )}
                    </CardBody>
                </Card>
            ) : (
                <FAQ
                    showModal={showModal}
                    setFAQId={setFAQId}
                    FAQ={currentFAQ}
                />
            )}

            {modalShowing && (
                <div className="tw-modal-container">
                    {/* Add Question Modal */}
                    {modalTitle === modalTitles.ADD_FAQ && (
                        <AddFAQModal
                            closeModal={closeModal}
                            FAQId={FAQId}
                            addFAQ={handleAddFAQ}
                        />
                    )}
                    {/* Edit Question Modal */}
                    {modalTitle === modalTitles.EDIT_FAQ && (
                        <EditFAQModal
                            closeModal={closeModal}
                            currentFAQ={currentFAQ}
                            setFAQId={setFAQId}
                            editFAQ={handleEditFAQ}
                            deleteFAQ={handleDeleteFAQ}
                        />
                    )}
                </div>
            )}
        </div>
    );
}

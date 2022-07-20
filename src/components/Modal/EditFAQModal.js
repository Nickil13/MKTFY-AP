import React, { useState, useEffect } from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/icon_close.svg";
import { useLocation } from "react-router-dom";
import { dummyFAQs } from "data/dummyFAQs";
import { useModalContext } from "context/ModalContext";

export default function EditFAQModal() {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const { closeModal } = useModalContext();
    let location = useLocation();

    useEffect(() => {
        /* Get the id from the location. Can't get it from useParams. */
        const id = location.pathname.split("/")[3];
        const currentFAQ = dummyFAQs.find((faq) => faq.id === id);
        if (currentFAQ) {
            setQuestion(currentFAQ.title);
            setAnswer(currentFAQ.description);
        }
    }, []);

    const handleEditFAQ = (e) => {
        e.preventDefault();
        console.log("Editing FAQ:", { question, answer });
        closeModal();
    };

    return (
        <Card className="tw-max-w-[1249px] tw-h-3/4 tw-pb-14">
            <CardHeader
                icon
                className={`tw-flex tw-justify-between tw-items-center  tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-10 tw-py-10 -tw-top-14  tw-shadow-card-header tw-mx-8`}
            >
                <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0">
                    Edit Question
                </h3>
                <CloseIcon
                    className="tw-fill-white tw-cursor-pointer"
                    onClick={closeModal}
                />
            </CardHeader>
            <CardBody className="tw-pl-16 tw-pr-14">
                <form
                    onSubmit={handleEditFAQ}
                    className="tw-flex tw-flex-col tw-h-full "
                >
                    <div className="tw-flex tw-flex-col tw-mb-9">
                        <label
                            htmlFor="question"
                            className="tw-font-semibold tw-text-sm-16 tw-mb-3 tw-text-gray-400"
                        >
                            Question
                        </label>
                        <input
                            type="text"
                            name="question"
                            id="question"
                            placeholder="Type question"
                            className="tw-input tw-w-1/2 tw-border-solid tw-font-semibold"
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                        />
                    </div>
                    <div className="tw-flex tw-flex-col tw-grow">
                        <label
                            htmlFor="answer"
                            className="tw-font-semibold tw-text-sm-16 tw-mb-3 tw-text-gray-400"
                        >
                            Answer
                        </label>
                        <textarea
                            name="answer"
                            id="answer"
                            placeholder="Type answer"
                            className="tw-input tw-resize-none tw-h-full tw-py-10 tw-leading-7"
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="tw-btn-purple tw-max-w-[576px] tw-mt-[73px] tw-mx-auto tw-w-full"
                        disabled={!question || !answer}
                    >
                        Save Changes
                    </button>
                </form>
            </CardBody>
        </Card>
    );
}

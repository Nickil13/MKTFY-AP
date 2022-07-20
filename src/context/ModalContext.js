import React, { useState } from "react";
const ModalContext = React.createContext();

export function useModalContext() {
    return React.useContext(ModalContext);
}

export function ModalContextProvider(props) {
    const [modalShowing, setModalShowing] = useState(false);
    // For determining which modal to show
    const [modalTitle, setModalTitle] = useState("");

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
        <ModalContext.Provider
            value={{ modalShowing, modalTitle, showModal, closeModal }}
            {...props}
        />
    );
}

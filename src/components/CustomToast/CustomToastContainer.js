import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

function CustomToastContainer() {
    return (
        <ToastContainer
            hideProgressBar={true}
            bodyClassName={() =>
                "tw-flex tw-justify-between tw-text-base tw-p-3 "
            }
        />
    );
}

export { CustomToastContainer, toast };

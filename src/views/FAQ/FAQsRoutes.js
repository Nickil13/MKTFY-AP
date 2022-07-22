import { EditFAQModal } from "components/Modal";
import { AddFAQModal } from "components/Modal";
import React from "react";
import { Switch, Route } from "react-router-dom";
import { modalTitles } from "variables/modalTitles";
import FAQ from "./FAQ";
import FAQsPage from "./FAQsPage";

export default function FAQsRoutes() {
    const [modalTitle, setModalTitle] = React.useState("");
    return (
        <div className="tw-relative tw-min-h-ap">
            <Switch>
                <Route exact path={"/admin/FAQ"} component={FAQsPage} />
                <Route path={"/admin/FAQ/:id"} component={FAQ} />
            </Switch>
            <button onClick={() => setModalTitle(modalTitles.ADD_FAQ)}>
                Open Add Modal
            </button>
            <div className="tw-absolute tw-flex tw-items-center tw-justify-center tw-inset-0 tw-pl-drawer tw-bg-[#000000]/20 tw-z-[9999]">
                {/* Add Question Modal */}
                {modalTitle === modalTitles.ADD_FAQ && <AddFAQModal />}
                {/* Edit Question Modal */}
                {modalTitle === modalTitles.EDIT_FAQ && <EditFAQModal />}
            </div>
        </div>
    );
}

import React from "react";
import { Switch, Route } from "react-router-dom";
import FAQ from "./FAQ";
import FAQsPage from "./FAQsPage";

export default function FAQsRoutes() {
    return (
        <div className="tw-min-h-ap">
            <Switch>
                <Route exact path={"/admin/FAQ"} component={FAQsPage} />
                <Route path={"/admin/FAQ/:id"} component={FAQ} />
            </Switch>
        </div>
    );
}

import Logo from "components/Icons/Logo";
import React from "react";
import { useHistory, Route, Switch } from "react-router-dom";
import { ForgotPassword, Login, ResetPassword, VerifyReset } from "views/Login";
import { useUserContext } from "context/UserContext";

export default function LoginLayout() {
    const { isAuthenticated } = useUserContext();
    let history = useHistory();

    React.useEffect(() => {
        if (isAuthenticated) {
            history.push("/admin/dashboard");
        }
    }, [isAuthenticated]);

    return (
        <div className="tw-relative tw-bg-login-clouds tw-bg-cover tw-bg-no-repeat tw-min-h-screen">
            <div className="tw-absolute tw-t-0 tw-l-0 tw-pt-20 tw-pl-36">
                <Logo width="w-56" fill="fill-purple-200" />
            </div>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-screen">
                <Switch>
                    <Route path="/auth/login" component={Login} />
                    <Route
                        path="/auth/forgot-password"
                        component={ForgotPassword}
                    />
                    <Route path="/auth/verify-reset" component={VerifyReset} />
                    <Route
                        path="/auth/reset-password"
                        component={ResetPassword}
                    />
                </Switch>
            </div>
        </div>
    );
}

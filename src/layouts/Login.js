import Logo from "components/Icons/Logo";
import React from "react";
import { Route, Switch } from "react-router-dom";
// import { useModalContext } from "../context/ModalContext";
// import { useUserContext } from "../context/UserContext";

export default function Login() {
    // const { showModal, setShowModal } = useModalContext();
    // const { isAuthenticated, error } = useUserContext();
    // let history = useHistory();
    // let location = useLocation();

    // React.useEffect(() => {
    //     if (isAuthenticated) {
    //         history.push("/admin/dashboard");
    //         if (showModal) {
    //             setShowModal(false);
    //         }
    //     }
    // }, [isAuthenticated]);

    // React.useEffect(() => {
    //     /* When returning to this route or if there is an error,
    //      check if the route includes a modal.
    //     If so and the modal is not showing, show it.*/
    //     if (location.pathname.length > 1 && !showModal) {
    //         setShowModal(true);
    //     }
    // }, [location, error]);

    const Test = () => {
        return (
            <div className="tw-bg-green tw-h-[250px] tw-w-[250px]">Login</div>
        );
    };
    return (
        <div className="tw-relative tw-bg-login-clouds tw-bg-cover tw-bg-no-repeat tw-min-h-screen">
            <div className="tw-absolute tw-t-0 tw-l-0 tw-pt-20 tw-pl-36">
                <Logo width="w-56" fill="fill-purple-200" />
            </div>
            <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-h-screen tw-pt-24 tw-w-4/5 tw-mx-auto">
                <div className="tw-flex tw-flex-col tw-items-center tw-mt-14 tw-w-full">
                    <Switch>
                        <Route path="/auth/login" component={Test} />
                        <Route
                            path="auth/forgot-password"
                            exact
                            component={Test}
                        />
                        <Route
                            path="auth/verify-reset"
                            exact
                            component={Test}
                        />
                        <Route
                            path="auth/reset-password"
                            exact
                            component={Test}
                        />
                    </Switch>
                </div>
            </div>
        </div>
    );
}

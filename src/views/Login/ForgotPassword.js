import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { LoginInput } from "components/Input";
import Wrapper from "./Wrapper";
import { useUserContext } from "context/UserContext";

export default function ForgotPassword() {
    const { changePassword } = useUserContext();
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    let history = useHistory();

    const checkValidEmail = (value) => {
        if (!value || value.match(/^[^\s@]+@[^\s@].[^\s@]+$/) == null) {
            setEmailError("Your email is incorrect");
        } else {
            setEmailError("");
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        changePassword(email);
        history.push("/auth/login");
    };
    return (
        <Wrapper goBack closeable>
            <h1 className="tw-text-purple-200 tw-text-center tw-font-bold tw-m-0 tw-text-lg">
                Forgot Your Password?
            </h1>
            <div className="tw-max-w-input tw-mx-auto">
                <p className="tw-mb-15 tw-text-base tw-font-semibold tw-text-gray-300 tw-leading-7">
                    It&apos;s okay, these things happen. Please enter your email
                    in the field below. We will send you an email to reset your
                    password.
                </p>
                <form
                    className="tw-flex tw-flex-col"
                    onSubmit={handleForgotPassword}
                >
                    <LoginInput
                        name="email"
                        type="email"
                        value={email}
                        setValue={setEmail}
                        onBlur={(e) => checkValidEmail(e.target.value)}
                        invalid={emailError}
                        errorMessage
                        lastchild
                    />
                    <button
                        className="tw-btn-purple tw-mt-15 tw-max-w-[345px] tw-mx-auto tw-w-full"
                        type="submit"
                        disabled={!email}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Wrapper>
    );
}

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Wrapper from "./Wrapper";
import { LoginInput } from "components/Input";

export default function VerifyReset() {
    const [verificationCode, setVerificationCode] = useState("");
    let history = useHistory();
    let email = "george.carlson@g*****";

    const handleResendCode = () => {
        console.log("Resending code.");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push("/auth/reset-password");
    };
    return (
        <Wrapper goBack>
            <h1 className="tw-text-purple-200 tw-text-center tw-font-bold tw-text-lg tw-mt-0 tw-mb-0">
                Reset Your Password?
            </h1>
            <div className="tw-max-w-input tw-mx-auto">
                <p className="tw-mb-15 tw-text-base tw-font-semibold tw-text-gray-300 tw-leading-7">
                    A code has been sent to your email
                    <span className="tw-text-gray-500"> {email}</span>. Please
                    enter the verification code below.
                </p>
                <form
                    className="tw-flex tw-flex-col tw-max-w-input tw-mx-auto"
                    onSubmit={handleSubmit}
                >
                    <LoginInput
                        name="verification code"
                        placeholder="00 - 00 - 00"
                        value={verificationCode}
                        setValue={setVerificationCode}
                        lastchild
                    />

                    <div className="tw-flex tw-justify-end tw-mt-2">
                        <span
                            onClick={handleResendCode}
                            className="tw-text-gold-200 tw-underline tw-text-xs tw-font-semibold tw-cursor-pointer"
                        >
                            I didn&apos;t receive the code. Please sent it again
                        </span>
                    </div>
                    <button
                        className="tw-btn-purple tw-mt-10 tw-max-w-[345px] tw-mx-auto tw-w-full"
                        type="submit"
                        disabled={!verificationCode}
                    >
                        Submit
                    </button>
                </form>
            </div>
        </Wrapper>
    );
}

import React, { useState, useMemo } from "react";
import Wrapper from "./Wrapper";
import PasswordRequirement from "./PasswordRequirement";
import { useHistory } from "react-router-dom";
import { checkUppercase, checkContainsNumber } from "utils/helpers";
import { PasswordInput } from "components/Input";

export default function ResetPassword() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordsMatching, setPasswordsMatching] = useState(true);
    const correctLength = password.length > 5;
    const hasUppercase = useMemo(() => checkUppercase(password), [password]);
    const hasNumber = checkContainsNumber(password);
    const criteriaMet = correctLength && hasUppercase && hasNumber;
    const passwordStrength = criteriaMet ? "strong" : "weak";
    let history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Resetting password.");
        //Loading Screen -> Login
        // navigate("/loading", { state: { redirect: "/login" } });
        history.push("/auth/login");
    };

    const checkPasswordsMatching = () => {
        if (password == confirmPassword) {
            setPasswordsMatching(true);
        } else {
            setPasswordsMatching(false);
        }
    };
    return (
        <Wrapper goBack>
            <div className="tw-max-w-input tw-mx-auto">
                <h1 className="tw-text-purple-200 tw-text-center tw-font-bold tw-mb-0 tw-text-lg tw-mt-0">
                    Reset Password
                </h1>
                <p className="tw-mb-6 tw-text-base tw-font-semibold tw-text-gray-300 tw-leading-7">
                    The password must have at least 6 characters and must
                    contain 1 uppercase and 1 number.
                </p>
                <form
                    className="tw-w-full tw-flex tw-flex-col tw-content-center"
                    onSubmit={handleSubmit}
                >
                    <div className="tw-relative">
                        <PasswordInput
                            password={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={checkPasswordsMatching}
                        />
                        {password && (
                            <span
                                className={`tw-absolute tw-top-1 tw-left-20 ${
                                    passwordStrength === "weak"
                                        ? "tw-text-gold-200"
                                        : "tw-text-green"
                                } tw-font-semibold tw-text-2xs tw-capitalize`}
                            >
                                {passwordStrength}
                            </span>
                        )}
                    </div>
                    <PasswordInput
                        name="confirm password"
                        password={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        onBlur={checkPasswordsMatching}
                        invalid={!passwordsMatching}
                        errorMessage
                        lastchild
                    />

                    <div className="tw-mt-2">
                        <PasswordRequirement requirement={correctLength}>
                            At least 6 characters
                        </PasswordRequirement>
                        <PasswordRequirement requirement={hasUppercase}>
                            1 Uppercase
                        </PasswordRequirement>
                        <PasswordRequirement requirement={hasNumber} lastchild>
                            1 Number
                        </PasswordRequirement>
                    </div>
                    <button
                        className="tw-btn-purple tw-mt-14  tw-max-w-[345px] tw-mx-auto tw-w-full"
                        type="submit"
                        disabled={
                            !criteriaMet ||
                            !passwordsMatching ||
                            !password ||
                            !confirmPassword
                        }
                    >
                        Set Password
                    </button>
                </form>
            </div>
        </Wrapper>
    );
}

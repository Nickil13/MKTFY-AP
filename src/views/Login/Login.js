import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";
import { LoginInput, PasswordInput } from "components/Input";
import { useUserContext } from "context/UserContext";

export default function Login() {
    const [email, setEmail] = useState("nickitest62@gmail.com");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("Apples31");
    const { login, error } = useUserContext();

    const handleLogin = (e) => {
        e.preventDefault();
        login(email, password);
    };

    const checkValidEmail = (value) => {
        if (!value || value.match(/^[^\s@]+@[^\s@].[^\s@]+$/) == null) {
            setEmailError("Your email is incorrect");
        } else {
            setEmailError("");
        }
    };

    return (
        <Wrapper>
            <h1 className="tw-text-purple-200 tw-text-center tw-font-bold tw-mb-8 tw-text-lg tw-mt-0">
                Welcome Back!
            </h1>
            <form
                className="tw-flex tw-flex-col tw-max-w-input tw-w-full tw-mx-auto"
                onSubmit={handleLogin}
            >
                <LoginInput
                    name="email"
                    type="email"
                    value={email}
                    setValue={setEmail}
                    onBlur={(e) => checkValidEmail(e.target.value)}
                    invalid={emailError}
                    errorMessage
                />

                <PasswordInput
                    password={password}
                    onChange={(e) => setPassword(e.target.value)}
                    lastchild
                />
                <div className="tw-flex tw-ml-auto">
                    <div className="text-red">{error && error}</div>
                    <Link
                        className="tw-text-gold-200 tw-underline tw-text-xs tw-font-semibold tw-mt-7"
                        to="/auth/forgot-password"
                    >
                        I forgot my password
                    </Link>
                </div>
                <button
                    className="tw-btn-gold tw-mt-15 tw-max-w-[345px] tw-mx-auto tw-w-full"
                    type="submit"
                    disabled={!email || emailError || !password}
                >
                    Login
                </button>
            </form>
        </Wrapper>
    );
}

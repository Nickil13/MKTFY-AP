import React, { useState, useEffect } from "react";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import { ReactComponent as CloseIcon } from "assets/img/mktfy/icon_close.svg";
import PropTypes from "prop-types";
import { useUserContext } from "context/UserContext";

export default function EditUserModal({ closeModal }) {
    const { user, getUserDetails } = useUserContext();
    const [firstName, setFirstName] = useState(user?.firstName || "");
    const [lastName, setLastName] = useState(user?.lastName || "");
    const [email, setEmail] = useState(user?.email || "");

    useEffect(() => {
        if (!user) {
            getUserDetails();
        } else if (!email) {
            setFirstName(user.firstName);
            setLastName(user.lastName);
            setEmail(user.email);
        }
    }, [user]);

    const handleEditUser = (e) => {
        e.preventDefault();
        console.log("Updated Admin's info");
        closeModal();
    };

    const handleChangePassword = () => {
        console.log("Sending email to change password!");
        closeModal();
    };

    return (
        <Card className="tw-max-w-[1249px] tw-h-3/4 tw-pb-14 tw-w-4/5 xl:tw-w-full tw-max-h-[587px]">
            <CardHeader
                icon
                className={`tw-flex tw-justify-between tw-items-center  tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-10 tw-py-10 -tw-top-14  tw-shadow-card-header tw-mx-8`}
            >
                <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0">
                    Edit
                </h3>
                <CloseIcon
                    className="tw-fill-white tw-cursor-pointer"
                    onClick={closeModal}
                />
            </CardHeader>
            <CardBody className="tw-pl-[70px] tw-pr-[75px] tw-overflow-y-auto">
                <form
                    onSubmit={handleEditUser}
                    className="tw-flex tw-flex-col tw-h-full "
                >
                    <div className="tw-grid lg:tw-grid-cols-2 tw-gap-9">
                        <div className="tw-flex tw-flex-col tw-mb-9 tw-w-full tw-max-w-input">
                            <label
                                htmlFor="firstName"
                                className="tw-font-semibold tw-text-sm-16 tw-mb-3 tw-text-gray-400"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="Your first name"
                                className="tw-input  tw-border-solid tw-font-semibold"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="tw-flex tw-flex-col tw-mb-9 tw-w-full tw-max-w-input">
                            <label
                                htmlFor="lastName"
                                className="tw-font-semibold tw-text-sm-16 tw-mb-3 tw-text-gray-400"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Your last name"
                                className="tw-input tw-border-solid tw-font-semibold"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="tw-flex tw-flex-col">
                        <label
                            htmlFor="email"
                            className="tw-font-semibold tw-text-sm-16 tw-mb-3 tw-text-gray-400"
                        >
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your email"
                            className="tw-input tw-border-solid tw-font-semibold"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="tw-flex tw-flex-wrap tw-space-y-2 lg:tw-space-y-0 tw-space-between tw-pt-28">
                        <button
                            type="button"
                            className="tw-btn tw-max-w-[472px] tw-mx-auto tw-w-full tw-bg-transparent tw-text-[#969696] tw-border tw-border-[#969696] tw-shadow-none tw-border-solid"
                            onClick={handleChangePassword}
                        >
                            Change Password
                        </button>
                        <button
                            type="submit"
                            className="tw-btn-purple tw-max-w-[472px] tw-mx-auto tw-w-full"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}

EditUserModal.propTypes = {
    closeModal: PropTypes.func,
};

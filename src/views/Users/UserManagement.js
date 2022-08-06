import React, { useState, useEffect } from "react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import User from "./User";
import Table from "components/Table/Table.js";
import { dummyUsers } from "data/dummyUsers";
import Pagination from "../../components/Pagination";

export default function UserManagement() {
    const [userId, setUserId] = useState("1");
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Loading users
        if (users.length === 0) {
            setUsers([...dummyUsers]);
        }
    }, []);

    return (
        <div className={`tw-min-h-ap ${!userId ? "tw-pt-8" : "tw-pt-0"}`}>
            {!userId ? (
                <Card className="tw-min-h-ap">
                    <CardHeader
                        icon
                        className={`tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-6 tw-py-10 -tw-top-16  tw-shadow-card-header`}
                    >
                        <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0">
                            Users
                        </h3>
                    </CardHeader>
                    <CardBody className="tw-flex tw-flex-col tw-list-none tw-pt-0 tw-pl-9 tw-pr-14 -tw-translate-y-10 tw-pb-0">
                        <Table
                            tableHeaderColor="mktfyPurple"
                            tableHead={[
                                "Name",
                                "Email",
                                "Location",
                                "Active Listing",
                                "Purchases",
                            ]}
                            tableData={users}
                            handleRowClick={setUserId}
                            className="tw-mt-0"
                        />
                        <Pagination />
                    </CardBody>
                </Card>
            ) : (
                <User setUserId={setUserId} />
            )}
        </div>
    );
}

import React, { useState } from "react";
import Card from "components/Card/Card";
import CardBody from "components/Card/CardBody";
import CardHeader from "components/Card/CardHeader";
import User from "./User";

export default function UserManagement() {
    const [userId, setUserId] = useState("1");

    React.useEffect(() => {
        console.log(userId);
    }, [userId]);
    return (
        <div className="tw-min-h-ap">
            {!userId ? (
                <Card className="tw-min-h-ap tw-pt-7">
                    <CardHeader
                        icon
                        className={`tw-flex tw-justify-between tw-bg-purple-500 tw-text-white tw-rounded-[10px] tw-px-6 tw-py-10 -tw-top-14  tw-shadow-card-header`}
                    >
                        <h3 className="tw-font-semibold tw-text-xl tw-text-start tw-m-0">
                            Users
                        </h3>
                        <button onClick={() => setUserId(1)}>
                            Click to go to user page
                        </button>
                    </CardHeader>
                    <CardBody className="tw-list-none tw-pt-0 tw-pl-9 tw-pr-14">
                        Table here WITH pagination
                    </CardBody>
                </Card>
            ) : (
                <User setUserId={setUserId} />
            )}
        </div>
    );
}

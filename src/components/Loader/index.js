import React from "react";

export default function Loader() {
    return (
        <div className="tw-fixed tw-inset-0 tw-z-[99999] tw-bg-[#000000]/10 tw-flex tw-items-center tw-justify-center">
            <div className="tw-w-[100px] tw-h-[100px] tw-rounded-full tw-bg-purple-600 tw-text-[4rem] tw-text-white tw-text-center">
                ...
            </div>
        </div>
    );
}

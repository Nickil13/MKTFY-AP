import React from "react";
import axios from "utils/request";
export default function Listings() {
    const getFAQs = async () => {
        try {
            const res = await axios.get("/FAQ");
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <button onClick={getFAQs}>Test API</button>
        </div>
    );
}

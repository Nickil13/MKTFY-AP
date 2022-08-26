import axios from "utils/request";

const getListings = async () => {
    try {
        const res = await axios.get("/Listing/all");
        return res;
    } catch (error) {
        console.error(error);
    }
};

const confirmListing = async (listingId) => {
    try {
        const res = axios.put("/Listing/confirmpurchase", {
            id: listingId,
        });
        return res;
    } catch (error) {
        console.error(error);
    }
};

export { getListings, confirmListing };

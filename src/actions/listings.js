import axios from "utils/request";

const getListings = async () => {
    const res = await axios.get("/Listing/all");
    return res;
};

const confirmListing = async (listingId) => {
    const res = axios.put("/Listing/confirmpurchase", {
        id: listingId,
    });
    return res;
};

export { getListings, confirmListing };

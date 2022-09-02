import axios from "utils/request";

const getUsers = async () => {
    const res = await axios.get("/APUsers");
    return res;
};

const getUserDetails = async (userId) => {
    const res = await axios.get(`/APUsers/${userId}`);
    return res;
};

const getUserActiveListings = async (userId) => {
    const res = await axios.get(`/APUsers/${userId}/active`);
    return res;
};

const getUserPurchasedListings = async (userId) => {
    const res = await axios.get(`/APUsers/${userId}/purchased`);
    return res;
};

const deleteUserListing = async (listingId) => {
    const res = await axios.delete(`/Listing/${listingId}`);
    return res;
};

export {
    getUsers,
    getUserDetails,
    getUserActiveListings,
    getUserPurchasedListings,
    deleteUserListing,
};

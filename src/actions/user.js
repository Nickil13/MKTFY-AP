import axios from "utils/request";

const getUsers = async () => {
    try {
        const res = await axios.get("/APUsers");
        return res;
    } catch (error) {
        console.error(error);
    }
};

const getUserDetails = async (userId) => {
    try {
        const res = await axios.get(`/APUsers/${userId}`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

const getUserActiveListings = async (userId) => {
    try {
        const res = await axios.get(`/APUsers/${userId}/active`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

const getUserPurchasedListings = async (userId) => {
    try {
        const res = await axios.get(`/APUsers/${userId}/purchased`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

const deleteUserListing = async (listingId) => {
    try {
        const res = await axios.delete(`/Listing/${listingId}`);
        return res;
    } catch (error) {
        console.error(error);
    }
};

export {
    getUsers,
    getUserDetails,
    getUserActiveListings,
    getUserPurchasedListings,
    deleteUserListing,
};

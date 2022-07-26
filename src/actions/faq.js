import axios from "utils/request";

const getFAQs = async () => {
    try {
        const res = await axios.get("/FAQ");
        console.log("successfully fetched FAQs");
        return res;
    } catch (error) {
        console.log(error);
    }
};

const getFAQById = async (id) => {
    try {
        const res = await axios.get(`/FAQ/${id}`);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const createFAQ = async (title, description) => {
    const body = { title, description };
    try {
        const res = await axios.post("/FAQ", body);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const editFAQ = async (id, title, description) => {
    const body = { id, title, description };

    try {
        const res = await axios.put("/FAQ", body);
        return res;
    } catch (error) {
        console.log(error);
    }
};

const deleteFAQ = async (id) => {
    try {
        await axios.delete(`/FAQ/${id}`);
        return { success: true };
    } catch (error) {
        console.log(error);
    }
};

export { getFAQs, getFAQById, createFAQ, editFAQ, deleteFAQ };

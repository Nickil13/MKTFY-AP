import axios from "utils/request";

const getFAQs = async () => {
    const res = await axios.get("/FAQ");
    return res;
};

const getFAQById = async (id) => {
    const res = await axios.get(`/FAQ/${id}`);
    return res;
};

const createFAQ = async (title, description) => {
    const body = { title, description };

    const res = await axios.post("/FAQ", body);
    return res;
};

const editFAQ = async (id, title, description) => {
    const body = { id, title, description };

    const res = await axios.put("/FAQ", body);
    return res;
};

const deleteFAQ = async (id) => {
    await axios.delete(`/FAQ/${id}`);
    return { success: true };
};

export { getFAQs, getFAQById, createFAQ, editFAQ, deleteFAQ };

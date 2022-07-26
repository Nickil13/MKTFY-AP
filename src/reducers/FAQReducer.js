import { LOAD_FAQS, ADD_FAQ, EDIT_FAQ, DELETE_FAQ } from "./action-types";

export const FAQReducer = (state, action) => {
    console.log(`Type: ${action.type}`);
    switch (action.type) {
        case LOAD_FAQS:
            return { FAQs: [...action.payload] };
        case ADD_FAQ:
            return { FAQs: [...state.FAQs, action.payload] };
        case EDIT_FAQ:
            return { FAQs: action.payload };
        case DELETE_FAQ:
            return { FAQs: action.payload };
        default:
            return state;
    }
};

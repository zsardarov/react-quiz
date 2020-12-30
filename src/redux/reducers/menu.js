import {STORE_QUESTION_CATEGORIES, STORE_QUESTIONS} from "../actionTypes";

const initialState = {
    categories: [],
    questions: []
};

export default function menu(state = initialState, action) {
    switch (action.type) {
        case STORE_QUESTION_CATEGORIES: {
            return {...state, categories: action.payload.categories};
        }
        case STORE_QUESTIONS: {
            return {...state, questions: action.payload.questions};
        }
        default: return state;
    }
};

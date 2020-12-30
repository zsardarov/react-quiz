import {
    STORE_QUESTIONS,
    STORE_QUESTION_CATEGORIES,
    START_QUIZ,
    SAVE_ANSWER,
    FINISH_QUIZ,
    RESTART_QUIZ
} from "./actionTypes";

export const storeCategories = (categories) => {
    return {
        type: STORE_QUESTION_CATEGORIES,
        payload: {categories}
    }
};

export const storeQuestions = (questions) => {
    return {
        type: STORE_QUESTIONS,
        payload: {questions}
    };
};

export const startQuiz = () => {
    return {
        type: START_QUIZ,
        payload: {}
    };
};

export const finishQuiz = () => {
    return {
        type: FINISH_QUIZ,
        payload: {}
    };
};

export const restartQuiz = () => {
    return {
        type: RESTART_QUIZ,
        payload: {}
    };
};

export const saveAnswer = (correctAnswer, pickedAnswer) => {
    return {
        type: SAVE_ANSWER,
        payload: {correctAnswer, pickedAnswer}
    };
};

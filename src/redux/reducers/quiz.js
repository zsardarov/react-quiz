import {START_QUIZ, FINISH_QUIZ, SAVE_ANSWER, RESTART_QUIZ} from "../actionTypes";
import {QUIZ_STATUSES} from "../../enums";
import moment from "moment";

const initialState = {
    status: QUIZ_STATUSES.NOT_STARTED,
    startTime: null,
    endTime: null,
    currentPosition: 0,
    score: 0
};

export default function quiz(state = initialState, action) {
    switch (action.type) {
        case START_QUIZ: {
            return {...state, startTime: moment(), status: QUIZ_STATUSES.STARTED};
        }
        case FINISH_QUIZ: {
            return {...state, endTime: moment(), status: QUIZ_STATUSES.FINISHED};
        }
        case RESTART_QUIZ: {
            return {...initialState, startTime: moment(), status: QUIZ_STATUSES.STARTED, };
        }
        case SAVE_ANSWER: {
            const correctAnswer = action.payload.correctAnswer;
            const pickedAnswer = action.payload.pickedAnswer;

            let updatedState = {...state};
            updatedState.currentPosition = ++updatedState.currentPosition;

            if (correctAnswer === pickedAnswer) {
                updatedState.score = ++updatedState.score;
            }
            return updatedState;
        }
        default: return state;
    }
};

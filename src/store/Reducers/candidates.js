import * as types from "../Constants";


export const candidateReducer = (state = {}, action) => {
    switch (action.type) {
        case types.GET_CANDIDATE_LIST_SUCCESS:
            return { ...state, candidatesList: action.payload };
        case types.GET_CANDIDATE_LIST_FAILURE:
            return { ...state, Error: action.payload };

        default:
            return state;
    }
};

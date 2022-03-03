import { api } from "../../api";
import * as types from "../Constants";
import {GET_CANDIDATE_LIST_SUCCESS} from "../Constants";

export const getCandidatesList = (data) => {
    let _data = {

    };
    const options = {
        url: "v1/payment/dailytransaction",
    };
    options.types = [
        types.GET_CANDIDATE_LIST_SUCCESS,
        types.GET_CANDIDATE_LIST_FAILURE,
    ];

    return api.post(options, _data);
};

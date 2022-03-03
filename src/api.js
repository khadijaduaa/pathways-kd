import React from "react";
import axios from "axios";
import * as types from "./store/Constants/index.js";
const baseURL = "https://api-stage.ezymigrate.co.nz/";


const api = {

    get: (options) => async (dispatch) => {
        const [success, failure] = options.types;
        const promise = (resolve, reject) => {
            var token = localStorage.getItem("token");

            return axios({
                method: "GET",
                url: `${baseURL}${options.url}`,
                headers: {
                    Authorization: "Bearer " + token,
                },
            })
                .then((res) => {
                    resolve(
                        dispatch({
                            type: success,
                            payload: res.data,
                        })
                    );
                })
                .catch((err) => {
                    reject(
                        dispatch({
                            type: failure,
                            payload: err,
                        })
                    );
                });
        };
        return new Promise(promise);
    },

    post: (options, params = null) => async (dispatch) => {
        const [success, failure] = options.types;
        const promise = (resolve, reject) => {
            var token = localStorage.getItem("token");
            axios({
                method: "POST",
                url: `${baseURL}${options.url}`,
                data: params,
                headers: {
                    Authorization: "Bearer " + token,
                    "Content-Type": "application/json",
                },
            })
                .then((res) => {
                    resolve(
                        dispatch({
                            type: success,
                            payload: res.data,
                        })
                    );
                })
                .catch((err) => {
                    reject(
                        dispatch({
                            type: failure,
                            payload: err,
                        })
                    );
                });
        };

        return new Promise(promise);
    },

};
export { api };

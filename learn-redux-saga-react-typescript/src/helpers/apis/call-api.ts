import axios from 'axios';
import authenticationService from "../../services/authentication-service";
import {constants} from "http2";
import LRU from 'lru-cache';
import { configure } from 'axios-hooks';

const makeHttpCalling = axios.create({
    baseURL: process.env.REACT_APP_API_HOST
});

makeHttpCalling.interceptors.request.use(
    config => {
        const token = authenticationService.getAccessToken();
        if (token && config && config.url !== 'auth/login' && config.headers) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    },
);

makeHttpCalling.interceptors.response.use(
    response => {
        return response;
    },
    async error => {
        const originalConfig = error.config;
        if (
            error.response && error.response.status === constants.HTTP_STATUS_OK && originalConfig.url !== 'auth/login'
        ) {
            //Logout
            store.dispatch(authActions.logout());
        }

        return Promise.reject(error);
    });

const cache = new LRU({ max: 10 });

configure({ axios: makeHttpCalling, cache });

export {
    makeHttpCalling
}

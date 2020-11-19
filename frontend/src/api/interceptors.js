import axios from 'axios';
import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from "react-router-dom";
import history from '../history';

const instance = axios.create({
    baseURL: `http://localhost:5555/`
});

instance.interceptors.request.use(async(config) => {
    const token = window.localStorage.getItem('accessToken');  
    if(token){
        config.headers = {...config.headers, 'Authorization': token};
    }
    return config;
});

instance.interceptors.response.use(response => {
    if (response.data.accessToken) {
        window.localStorage.setItem('accessToken', response.data.accessToken);
        
    }
    return response;
});
export default instance;
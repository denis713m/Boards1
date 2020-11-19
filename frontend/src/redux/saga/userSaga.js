import * as types from '../actionTypes';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import {registerRequest, loginRequest, getUserRequest} from '../../api/fetchApi';


export function* registrationUser(action) {
    yield put({type: types.REGISTRATION_USER_REQUEST});
    try{
        yield  registerRequest(action.data.values);
        action.data.history.replace('/');
        yield put({type: types.REGISTRATION_USER_SUCCESS});
    }
    catch (e) {
        yield put({type: types.REGISTRATION_USER_ERROR, error: e.response});
    }
 };

 export function* login(action) {
    yield put({type: types.REGISTRATION_USER_REQUEST});
    try{
        const {data} = yield  loginRequest(action.data.values);
        console.log(action);
        action.data.history.replace('/');
        yield put({type: types.REGISTRATION_USER_SUCCESS, data:data});
    }
    catch (e) {
        console.log(e);
        yield put({type: types.REGISTRATION_USER_ERROR, error: e.response});
    }
 }

 export function* getUser(action) {
    yield put({type: types.REGISTRATION_USER_REQUEST});
    try{
        console.log('getUser');
        const {data} = yield  getUserRequest();
        //action.data.history.replace('/');
        console.log(data);
        yield put({type: types.REGISTRATION_USER_SUCCESS, data:data});
    }
    catch (e) {

        yield put({type: types.REGISTRATION_USER_ERROR, error: e.response});
    }
 }
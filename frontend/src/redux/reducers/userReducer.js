import * as types from '../actionTypes';

const initialState = {
    isFetching: true,
    error: false,
    user: null,    
  };

  export default function(state = initialState, action) {
    switch (action.type) {
      case types.REGISTRATION_USER_REQUEST:{
        console.log('request');
        state.isFetching = true;
        return {...state}
      }
      case types.REGISTRATION_USER_SUCCESS:{
        state.user = action.data;
        state.isFetching = false;
        console.log(state);
        return {...state,
            isFetching: false,
            user: action.data,
            error: null
        }
      }
      case types.REGISTRATION_USER_ERROR:{
        console.log('error');
        return {
          ...state,
          isFetching: false,
          error: action.error,
          user: null
        }
      }
      case types.LOG_OUT:{
        console.log('log_out');
        window.localStorage.removeItem('accessToken');
        return {
          ...state,
          isFetching: false,
          error: true,
          user: null
        }
      }
      default:
        return state;
    }
  }
  
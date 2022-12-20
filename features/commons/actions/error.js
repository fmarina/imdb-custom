import { CLEAR_ERROR, GET_ERROR } from './actionTypes';

export const getErrors = (message) => ({ type: GET_ERROR, payload: message });

export const clearErrors = () => ({ type: CLEAR_ERROR });

import {LOGIN, LOGOUT, loginAction, logoutAction} from './userActions';
import createWebStorage from 'redux-persist/lib/storage/createWebStorage';
import { persistReducer } from "redux-persist";

import { userDataType } from './userActions';

const initialState: userDataType = {
    nick_name : ""
};

export type ActionType = ReturnType<typeof loginAction> | ReturnType<typeof logoutAction>;

export const userReducer = (state:userDataType = initialState, action : ActionType) => {
    switch (action.type) {
        case LOGIN:
            return { ...action.payload };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}
export type userReducerState = ReturnType<typeof userReducer>

const createNoopStorage = () => {
    return {
        getItem(_key: any) {
            return Promise.resolve(null);
        },
        setItem(_key: any, value:any) {
            return Promise.resolve(value);
        },
        removeItem(_key: any) {
            return Promise.resolve();
        }
    }
}

const storage = typeof window == 'undefined' 
    ? createNoopStorage()
    : createWebStorage('local');

const persistConfig = {
  key: "userInfo",
  storage,
}

export default persistReducer(persistConfig, userReducer);
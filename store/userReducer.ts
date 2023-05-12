import {LOGIN, LOGOUT, loginAction, logoutAction} from './userActions';

import storageSession from "redux-persist/lib/storage/session";
import { persistReducer } from "redux-persist";

import { userDataType } from './userActions';

const initialState: userDataType = {
    nick_name : ""
};

export type ActionType = ReturnType<typeof loginAction> | ReturnType<typeof logoutAction>;

export const userReducer = (state = initialState, action : ActionType) => {
    switch (action.type) {
        case LOGIN:
            return { ...action.payload };
        case LOGOUT:
            return { ...initialState };
        default:
            return state;
    }
}

const persistConfig = {
  key: "userInfo",
  storage: storageSession,
}

export default persistReducer(persistConfig, userReducer);
import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import {persistStore} from 'redux-persist';

export const store = configureStore({
    reducer: {
        user: userReducer
    }
})

export const persistor = persistStore(store);
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { userReducer } from './userReducer';
import {persistStore} from 'redux-persist';

export const store = configureStore({
    reducer: {
        user: userReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware({ serializableCheck: false, })
})

export const persistor = persistStore(store);
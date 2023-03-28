import {
    configureStore,
    combineReducers,
    AnyAction,
    CombinedState,
} from '@reduxjs/toolkit';
import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import CurUserSlice, { CurUserState } from './CurUserSlice';
import { Reducer } from '@reduxjs/toolkit';
  
  
export interface RootState {
    user: CurUserState;
}
  
const RootReducer = (
    state: RootState,
    action: AnyAction
): CombinedState<RootState> => {
    if (action.type === HYDRATE) return { ...state, ...action.payload };
    const combinedReducer = combineReducers({
        user: CurUserSlice.reducer,
    });
    return combinedReducer(state, action);
};
  
const makeStore = () => {
    return configureStore({
      reducer: RootReducer as Reducer<CombinedState<RootState>, AnyAction>,
      devTools: process.env.NODE_ENV === 'development',
    });
}
  
export const wrapper = createWrapper(makeStore);
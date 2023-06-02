import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
import { HYDRATE } from 'next-redux-wrapper'

// import userReducer, { UserState } from "store/slices//usersSlice";
import userReducer, { UserState } from "./userSlice";

export interface IState {
  user: UserState,
//   feeds: FeedState,
//   filter: FilterState
//   restaurants: RestaurantState
}

const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
  switch (action.type) {
    case HYDRATE: 
      return action.payload
    default: {
      const combinedReducer = combineReducers({
        // users: userReducer,
        // feeds: feedReducer,
        // filter: filterReducer,
        // restaurants: restaurantReducer,
        user: userReducer,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
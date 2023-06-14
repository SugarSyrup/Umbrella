// import { AnyAction, CombinedState, combineReducers } from "@reduxjs/toolkit";
// import { HYDRATE } from 'next-redux-wrapper'

// // import userReducer, { UserState } from "store/slices//usersSlice";
// import userReducer, { UserState } from "./userSlice";
// import workspaceReducer, { WorkspaceState } from "./workspaceSlice";
// import breadCrumbsReducer, { BreadCrumbState } from "./breadCrumb";

// export interface IState {
//   user: UserState,
//   workspace: WorkspaceState,
//   breadCrumbs : BreadCrumbState,
// }

// const rootReducer = (state: IState, action: AnyAction): CombinedState<IState> => {
//   switch (action.type) {
//     case HYDRATE: 
//       return action.payload
//     default: {
//       const combinedReducer = combineReducers({
//         // users: userReducer,
//         // feeds: feedReducer,
//         // filter: filterReducer,
//         // restaurants: restaurantReducer,
//         user: userReducer,
//         workspace: workspaceReducer,
//         breadCrumbs: breadCrumbsReducer,
//       })
//       return combinedReducer(state, action)
//     }
//   }
// }

// export default rootReducer
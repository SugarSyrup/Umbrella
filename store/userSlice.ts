// // roomsSlice.ts
// import { createSlice } from "@reduxjs/toolkit";
// import { AppState } from "./configureStore";

// export interface UserState {
//   isLoggin: boolean;
//   nickname: string;
//   user_id: number;
// }
// const initialState: UserState = {
//   isLoggin: false,
//   nickname: "",
//   user_id: -1,
// }

// export const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {
//     setIsLogin: (state, action) => {
//       // console.log("payload")
//       // console.log(action.payload);
//       state.nickname = action.payload.nickname;
//       state.isLoggin = action.payload.isLoggedin;
//       state.user_id = action.payload.user_id;
//     },
//   },
//   extraReducers: {},
// })

// export const { setIsLogin } = userSlice.actions

// export const selectUserState = (state : AppState) => {
//   // console.log("select")
//   // console.log(state.user);
//   return state.user;
// }

// export default userSlice.reducer
// //redux setting
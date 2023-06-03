// roomsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./configureStore";

export interface UserState {
  isLoggin: boolean;
  nickname: string;
}
const initialState: UserState = {
  isLoggin: false,
  nickname: ""
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      // console.log("payload")
      // console.log(action.payload);
      state.nickname = action.payload.nickname;
      state.isLoggin = action.payload.isLoggedin;
    },
  },
  extraReducers: {},
})

export const { setIsLogin } = userSlice.actions

export const selectUserState = (state : AppState) => {
  // console.log("select")
  // console.log(state.user);
  return state.user;
}

export default userSlice.reducer
//redux setting
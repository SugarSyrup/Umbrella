// roomsSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLoggin: boolean;
  nickname: string;
}
const initialState: UserState = {
  isLoggin: false,
  nickname: "anomynous"
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      // console.log(action.payload);
      state.isLoggin = action.payload.isLoggin
      state.nickname = action.payload.nickname
    },
  },
  extraReducers: {},
})

export const { setIsLogin } = userSlice.actions

export default userSlice.reducer
//redux setting
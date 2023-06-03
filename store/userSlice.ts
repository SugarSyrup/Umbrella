// roomsSlice.ts
import { createSlice } from "@reduxjs/toolkit";

export interface UserState {
  isLoggin: boolean;
}
const initialState: UserState = {
  isLoggin: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogin: (state, action) => {
      state.isLoggin = action.payload
    },
  },
  extraReducers: {},
})

export const { setIsLogin } = userSlice.actions

export default userSlice.reducer
//redux setting
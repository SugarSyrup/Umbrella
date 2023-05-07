import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurUserState {
  name: string;
  isLoggedIn: boolean;
}

const initialState: CurUserState = {
  name: 'anon',
  isLoggedIn : false,
};

const CurUserSlice = createSlice({
  name: 'CurUser',
  initialState,
  reducers: {
    changeCurUser: (
      state: CurUserState,
      action: PayloadAction<string>
    ) => {
      state.name = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { changeCurUser } = CurUserSlice.actions;
export default CurUserSlice;
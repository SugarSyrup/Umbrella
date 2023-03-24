import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurUserState {
  name: string;
}

const initialState: CurUserState = {
  name: 'anon',
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
    },
  },
});

export const { changeCurUser } = CurUserSlice.actions;
export default CurUserSlice;
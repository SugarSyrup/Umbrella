// roomsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./configureStore";

export interface WorkspaceState {
  id: string
}
const initialState: WorkspaceState = {
  id: ""
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setWorkspaceId: (state, action) => {
      // console.log("payload")
      // console.log(action.payload);
      state.id = action.payload;
    },
  },
  extraReducers: {},
})

export const { setWorkspaceId } = workspaceSlice.actions

export const selectWorkspaceId = (state : AppState) => state.workspace.id;

export default workspaceSlice.reducer
//redux setting
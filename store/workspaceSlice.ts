// roomsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./configureStore";

export interface WorkspaceState {
  id: string;
  title: string;
  data: {
    id: string,
    title: string,
    boards:{
      board_id:string,
      title:string,
    }[],
    events:{
      event_id:string,
      title: string,
    }[]
  }
}
const initialState: WorkspaceState = {
  id: "",
  title: "",
  data:{
    id:"",
    title:"",
    boards:[],
    events:[],
  }
}

export const workspaceSlice = createSlice({
  name: 'workspace',
  initialState,
  reducers: {
    setWorkspaceId: (state, action) => {
      // console.log("payload")
      // console.log(action.payload);
      state.id = action.payload.id;
      state.title = action.payload.title;
    },
    setWorkspaceInfo: (state, action) => {
      state.data = action.payload;
    }
  },
  extraReducers: {},
})

export const { setWorkspaceId, setWorkspaceInfo } = workspaceSlice.actions

export const selectWorkspaceState = (state : AppState) => state.workspace;

export default workspaceSlice.reducer
//redux setting
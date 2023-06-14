// // roomsSlice.ts
// import { createSlice } from "@reduxjs/toolkit";
// import { AppState } from "./configureStore";

// export interface WorkspaceState {
//   id: string;
//   title: string;
//   data: {
//     id: string,
//     title: string,
//     boards:{
//       board_id:string,
//       title:string,
//     }[],
//     events:{
//       event_id:string,
//       title: string,
//     }[]
//   };
//   current:{
//     title:string,
//     id: string,
//     type: "board" | "event" | "",
//   };
// }
// const initialState: WorkspaceState = {
//   id: "",
//   title: "",
//   data:{
//     id:"",
//     title:"",
//     boards:[],
//     events:[],
//   },
//   current:{
//     title:"none",
//     id:"",
//     type: "",
//   }
// }

// export const workspaceSlice = createSlice({
//   name: 'workspace',
//   initialState,
//   reducers: {
//     setWorkspaceId: (state, action) => {
//       // console.log("payload")
//       // console.log(action.payload);
//       state.id = action.payload.id;
//       state.title = action.payload.title;
//     },
//     setWorkspaceInfo: (state, action) => {
//       state.data = action.payload;
//     },
//     setCurrent: (state, action) => {
//       state.current = action.payload;
//     }
//   },
//   extraReducers: {},
// })

// export const { setWorkspaceId, setWorkspaceInfo, setCurrent } = workspaceSlice.actions

// export const selectWorkspaceState = (state : AppState) => state.workspace;

// export default workspaceSlice.reducer
// //redux setting
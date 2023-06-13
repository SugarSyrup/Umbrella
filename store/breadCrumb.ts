// roomsSlice.ts
import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./configureStore";

export interface BreadCrumbState {
  breadcrumbs: string[];
}
const initialState: BreadCrumbState = {
  breadcrumbs:["Home"],
}

export const breadCrumbsSlice = createSlice({
  name: 'breadCrumbs',
  initialState,
  reducers: {
    setBreadCrumbs: (state, action) => {
      state.breadcrumbs = action.payload;
    },
  },
  extraReducers: {},
})

export const { setBreadCrumbs } = breadCrumbsSlice.actions

export const selectBreadcrumbsState = (state : AppState) => {
  return state.breadCrumbs.breadcrumbs;
}

export default breadCrumbsSlice.reducer
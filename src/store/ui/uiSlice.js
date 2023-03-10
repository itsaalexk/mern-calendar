import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isDateModalOpen: false,
    color: undefined,
  },
  reducers: {
    onOpenDateModal: (state) => {
      state.isDateModalOpen = true;
    },
    onCloseDateModal: (state) => {
      state.isDateModalOpen = false;
    },
    onSetModalColor: (state, { payload }) => {
      state.color = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal, onSetModalColor } = uiSlice.actions;

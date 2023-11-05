import { createReducer, createAction } from "@reduxjs/toolkit";

export const action = {
  GET_STATE: createAction("GET_STATE"),
  UPDATE_STATE: createAction("UPDATE_STATE"),
};

export const navbarReducer = createReducer({ isOpen: false }, (builder) => {
  builder.addCase(action.GET_STATE, (state) => {
    return state.isOpen;
  });
  builder.addCase(action.UPDATE_STATE, (state, action) => {
    return { ...state, isOpen: action.payload.isOpen };
  });
});

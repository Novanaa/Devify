import { configureStore } from "@reduxjs/toolkit";
import { navbarReducer } from "./reducers/navbarReducer";

const store = configureStore({
  reducer: { navbar: navbarReducer },
});

export default store;

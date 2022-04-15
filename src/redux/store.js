import { configureStore } from "@reduxjs/toolkit";
import banks from "./reducers/banks";

export const store = configureStore({
    reducer: { banks: banks },
});

import { configureStore } from "@reduxjs/toolkit";
import { repoReducer } from "./reducers/repoReducer"; // Importing the repository reducer from the specified path

// Creating the Redux store with the repository reducer
export const store = configureStore({
    reducer: repoReducer, // Setting the repository reducer as the root reducer for the store
});

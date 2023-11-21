import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Initial state for the repository slice
const initialState = {
    repos: [], // Array to store fetched repositories
    status: "idle", // Status of the asynchronous operation (loading, succeeded, failed)
    error: null, // Error message in case of a failed operation
};

// Base URL for the GitHub API
const API_BASE_URL = "https://api.github.com/search/repositories";

// Async thunk for fetching repositories
export const fetchRepos = createAsyncThunk(
    "repos/fetchRepos",
    async ({ query, sort }) => {
        try {
            const response = await axios.get(
                `${API_BASE_URL}?q=${query}&sort=${sort}`,
                {
                    headers: {
                        Authorization: `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`,
                    },
                }
            );
            return response.data.items;
        } catch (error) {
            // Handle error appropriately
            throw error;
        }
    }
);

// Creating the repository slice
const repoSlice = createSlice({
    name: "repos", // Name of the slice
    initialState, // Initial state defined above
    reducers: {}, // Reducers for synchronous actions (none in this case)
    extraReducers: (builder) => {
        // Handling different states of the fetchRepos async thunk
        builder
            .addCase(fetchRepos.pending, (state) => {
                // Setting status to loading when the async operation is pending
                state.status = "loading";
            })
            .addCase(fetchRepos.fulfilled, (state, action) => {
                // Setting status to succeeded and updating repos with the fetched data
                state.status = "succeeded";
                state.repos = action.payload;
            })
            .addCase(fetchRepos.rejected, (state, action) => {
                // Setting status to failed and storing the error message
                state.status = "failed";
                state.error = action.error.message;
            });
    },
});

// Extracting the reducer from the created slice
export const repoReducer = repoSlice.reducer;

// Selector to get all repositories from the state
export const selectAllRepos = (state) => state.repos;

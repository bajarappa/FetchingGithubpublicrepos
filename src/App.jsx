// src/App.js
import React from "react";
import { Provider } from "react-redux";
import RepoList from "./components/RepoList"; // Importing the RepoList component
import { store } from "./redux/store"; // Importing the Redux store

// Main component for the application
export default function App() {
    return (
        // Wrapping the entire application with the Redux Provider, providing access to the Redux store
        <Provider store={store}>
            <div>
                {/* Rendering the RepoList component */}
                <RepoList />
            </div>
        </Provider>
    );
}

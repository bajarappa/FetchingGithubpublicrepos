// Import React and necessary hooks and components
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectAllRepos } from "../redux/reducers/repoReducer";
import RepoCard from "./RepoCard";
import Header from "./Header";

// Define the functional component RepoList
export default function RepoList() {
    // Initialize necessary hooks and state variables
    const dispatch = useDispatch();
    const repos = useSelector(selectAllRepos);
    const [query, setQuery] = useState("");
    const [sortOption, setSortOption] = useState("stars");
    const [initialLoad, setInitialLoad] = useState(true);
    const [loading, setLoading] = useState(false);

    // Function to handle the search action
    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setLoading(true);
        // Dispatch the fetchRepos action with the provided parameters
        dispatch(fetchRepos({ query: searchQuery, sort: sortOption }))
            .unwrap()
            .finally(() => setLoading(false));
        setInitialLoad(false);
    };

    // Function to sort repos based on the selected option
    const sortRepos = (repos, sortOption) => {
        return [...repos].sort((a, b) => {
            switch (sortOption) {
                case "stars":
                    return b.stargazers_count - a.stargazers_count;
                case "watchers":
                    return b.watchers_count - a.watchers_count;
                case "score":
                    return b.score - a.score;
                case "name":
                    return a.name.localeCompare(b.name);
                case "created_at":
                    return new Date(a.created_at) - new Date(b.created_at);
                case "updated_at":
                    return new Date(b.updated_at) - new Date(a.updated_at);
                default:
                    return 0;
            }
        });
    };

    // useEffect to fetch repos on initial load
    useEffect(() => {
        if (!query) {
            setLoading(true);
            dispatch(fetchRepos({ query: "javascript", sort: sortOption }))
                .unwrap()
                .finally(() => setLoading(false));
        }
    }, [dispatch, fetchRepos, sortOption]);

    // Sort repos based on the selected option or display unsorted repos if there's a search query
    const sortedRepos = query ? sortRepos(repos, sortOption) : repos;

    // Return the JSX for the RepoList component
    return (
        <>
            {/* Container for the RepoList component */}
            <div className="mx-auto max-w-7xl ">
                {/* Header component with search and sorting functionality */}
                <Header
                    onSearch={handleSearch}
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                    isSearchActive={!!query}
                />

                {/* Display loading message, repos, or no matching repos message based on the state */}
                {loading ? (
                    <p>Loading...</p>
                ) : sortedRepos.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-0 mb-4">
                        {/* Map through sorted repos and render RepoCard components */}
                        {sortedRepos.map((repo) => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))}
                    </ul>
                ) : (
                    <p>Search for your Repositary to display</p>
                )}
            </div>
        </>
    );
}

// src/components/RepoList.js
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import RepoCard from "./RepoCard";
// import { fetchRepos, selectAllRepos } from "../app/repoSlice";
import { fetchRepos, selectAllRepos } from "../redux/reducers/repoReducer";

const RepoList = () => {
    const dispatch = useDispatch();
    const repos = useSelector(selectAllRepos);
    const [query, setQuery] = useState("");
    const [sortOption, setSortOption] = useState("stars");
    const [initialLoad, setInitialLoad] = useState(true);

    const handleSearch = () => {
        dispatch(fetchRepos({ query, sort: sortOption }));
    };

    const sortRepos = (repos, sortOption) => {
        return [...repos].sort((a, b) => {
            switch (sortOption) {
                case "stars":
                    return b.stargazers_count - a.stargazers_count;
                case "watchers":
                    return b.watchers_count - a.watchers_count;
                case "score":
                    return b.score - a.score; // Note: "score" is not a standard GitHub API sorting option
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

    useEffect(() => {
        dispatch(fetchRepos("Javascript"));
    }, [query, sortOption]);

    const sortedRepos = query ? sortRepos(repos, sortOption) : repos;

    return (
        <div>
            <div>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
            </div>
            <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
            >
                <option value="stars">Stars</option>
                <option value="watchers">Watchers</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
                <option value="created_at">Created At</option>
                <option value="updated_at">Updated At</option>
            </select>
            <div>
                {sortedRepos.length > 0 ? (
                    sortedRepos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))
                ) : (
                    <p>No matching repos found.</p>
                )}
            </div>
        </div>
    );
};

export default RepoList;

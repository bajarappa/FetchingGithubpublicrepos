import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchRepos,
    repoSelector,
    setSortBy,
    sortRepos,
} from "../redux/reducers/repoReducer";
import RepoList from "../components/RepoList";

const GithubReposPage = () => {
    const dispatch = useDispatch();
    const { repos, status, sortBy } = useSelector(repoSelector);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        dispatch(fetchRepos(searchTerm));
    };

    const handleSortChange = (event) => {
        dispatch(setSortBy(event.target.value));
    };

    // Fetch repos on component mount (initial load)
    useEffect(() => {
        dispatch(fetchRepos(""));
    }, [dispatch]);

    // Fetch repos when the search term changes
    useEffect(() => {
        dispatch(fetchRepos(searchTerm));
    }, [dispatch, searchTerm]);

    const sortedRepos = sortRepos(repos, sortBy);

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                placeholder="Search"
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>

            <select value={sortBy} onChange={handleSortChange}>
                <option value="stars">Stars</option>
                <option value="watchers">Watchers</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
                <option value="created_at">Created At</option>
                <option value="updated_at">Updated At</option>
            </select>

            {status === "loading" && <p>Loading...</p>}
            {status === "failed" && <p>Error occurred</p>}

            <div>
                {status !== "loading" && sortedRepos.length > 0
                    ? sortedRepos.map((repo) => (
                          <div key={repo.id}>
                              {/* Display avatar, repo name, stars, description, language */}
                              <img src={repo.owner.avatar_url} alt="Avatar" />
                              <p>{repo.name}</p>
                              <p>Stars: {repo.stargazers_count}</p>
                              <p>Description: {repo.description}</p>
                              <p>Language: {repo.language}</p>
                          </div>
                      ))
                    : null}
            </div>
        </div>
    );
};

export default GithubReposPage;

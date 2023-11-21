import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepos, selectAllRepos } from "../redux/reducers/repoReducer";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";
import RepoCard from "./RepoCard";
import Header from "./Header";

const RepoList = () => {
    const dispatch = useDispatch();
    const repos = useSelector(selectAllRepos);
    const [query, setQuery] = useState("");
    const [sortOption, setSortOption] = useState("stars");
    const [initialLoad, setInitialLoad] = useState(true);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        dispatch(fetchRepos({ query: searchQuery, sort: sortOption }));
        setInitialLoad(false);
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
        if (initialLoad) {
            dispatch(fetchRepos("Javascript"));
        }
    }, [initialLoad]);

    const sortedRepos = query ? sortRepos(repos, sortOption) : repos;

    return (
        <>
            <Header
                onSearch={handleSearch}
                sortOption={sortOption}
                onSortChange={setSortOption}
                isSearchActive={!!query}
            />

            {sortedRepos.length > 0 ? (
                <ul className="divide-y divide-white/5  grid grid-cols-3 gap-4 p-4 m-4 ">
                    {sortedRepos.map((repo) => (
                        <RepoCard key={repo.id} repo={repo} />
                    ))}
                </ul>
            ) : (
                <p>No matching repos found.</p>
            )}
        </>
    );
};

export default RepoList;

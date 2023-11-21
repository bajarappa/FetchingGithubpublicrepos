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
    const [loading, setLoading] = useState(false);

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
        setLoading(true);
        dispatch(fetchRepos({ query: searchQuery, sort: sortOption }))
            .unwrap()
            .finally(() => setLoading(false));
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

    useEffect(() => {
        if (initialLoad) {
            dispatch(fetchRepos("Javascript"));
        }
    }, [initialLoad]);

    const sortedRepos = query ? sortRepos(repos, sortOption) : repos;

    return (
        <>
            <div className="mx-auto max-w-7xl ">
                <Header
                    onSearch={handleSearch}
                    sortOption={sortOption}
                    onSortChange={setSortOption}
                    isSearchActive={!!query}
                />

                {loading ? (
                    <p>Loading...</p>
                ) : sortedRepos.length > 0 ? (
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-4 sm:p-0 mb-4">
                        {sortedRepos.map((repo) => (
                            <RepoCard key={repo.id} repo={repo} />
                        ))}
                    </ul>
                ) : (
                    <p>No matching repos found.</p>
                )}
            </div>
        </>
    );
};

export default RepoList;

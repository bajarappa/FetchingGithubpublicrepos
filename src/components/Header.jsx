import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepos } from "../redux/reducers/repoReducer";
import SearchBar from "./SearchBar";

import SortDropdown from "./SortDropdown";

export default function Header({
    onSearch,
    sortOption,
    onSortChange,
    isSearchActive,
}) {
    return (
        <>
            <header className="  lg:static lg:overflow-y-visible">
                <div className=" sm:px-6 bg-gray-100 px-4 sm:my-4 sm:rounded-lg">
                    <div className="relative flex justify-between items-center lg:gap-8 xl:grid xl:grid-cols-12">
                        <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                            <div className="flex flex-shrink-0 items-center">
                                <a href="#" className="text-3xl font-bold">
                                    Repos
                                </a>
                            </div>
                        </div>
                        <SearchBar onSearch={onSearch} />

                        <div className=" lg:flex lg:items-center lg:justify-end xl:col-span-4">
                            {isSearchActive && (
                                <SortDropdown
                                    value={sortOption}
                                    onSortChange={onSortChange}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

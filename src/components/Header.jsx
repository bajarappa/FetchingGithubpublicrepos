import React from "react";
import SearchBar from "./SearchBar";
import SortDropdown from "./SortDropdown";

// Functional component Header
export default function Header({
    onSearch,
    sortOption,
    onSortChange,
    isSearchActive,
}) {
    // Return JSX for the Header component
    return (
        <>
            {/* Header section */}
            <header className="lg:static lg:overflow-y-visible">
                <div className="sm:px-6 bg-gray-100 px-4 sm:my-4 sm:rounded-lg">
                    {/* Container for the header content */}
                    <div className="relative flex justify-between items-center lg:gap-8 xl:grid xl:grid-cols-12">
                        {/* Logo section */}
                        <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                            <div className="flex flex-shrink-0 items-center">
                                <a href="/" className="text-3xl font-bold">
                                    Repos
                                </a>
                            </div>
                        </div>

                        {/* SearchBar section */}
                        <SearchBar onSearch={onSearch} />

                        {/* SortDropdown section, displayed only when search is active */}
                        <div className="lg:flex lg:items-center lg:justify-end xl:col-span-4">
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

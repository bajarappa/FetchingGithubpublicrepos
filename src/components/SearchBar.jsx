import React, { useState } from "react";

// Functional component SearchBar
export default function SearchBar({ onSearch }) {
    // State to manage the search query
    const [query, setQuery] = useState("");

    // Function to handle input change
    const handleInputChange = (e) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
    };

    // Function to handle search when Enter key is pressed
    const handleSearch = (e) => {
        if (e.key === "Enter" && query.trim() !== "") {
            onSearch(query);
        }
    };

    // Return JSX for the SearchBar component
    return (
        <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
            <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                    {/* Label for screen readers */}
                    <label htmlFor="search" className="sr-only">
                        Search
                    </label>
                    <div className="relative">
                        {/* Search icon */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        {/* Input for search */}
                        <input
                            id="search"
                            name="search"
                            className="block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                            type="search"
                            placeholder="Search"
                            value={query}
                            onChange={handleInputChange}
                            onKeyPress={handleSearch}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

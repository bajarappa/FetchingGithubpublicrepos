import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchRepos } from "../redux/reducers/repoReducer";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";
import SortDropdown from "./SortDropdown";

export default function Header({
    onSearch,
    sortOption,
    onSortChange,
    isSearchActive,
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    function handleMenuOpen() {
        setIsMenuOpen(!isMenuOpen);
    }
    return (
        <>
            <header class="bg-white shadow-sm lg:static lg:overflow-y-visible">
                <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                        <div class="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                            <div class="flex flex-shrink-0 items-center">
                                <a href="#" className="text-3xl font-bold">
                                    Github Repos
                                </a>
                            </div>
                        </div>
                        <SearchBar onSearch={onSearch} />
                        <div class="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                            {/* <!-- Mobile menu button --> */}
                            <button
                                onClick={handleMenuOpen}
                                type="button"
                                class="relative -mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                                aria-expanded="false"
                            >
                                <span class="absolute -inset-0.5"></span>
                                <span class="sr-only">Open menu</span>
                                {/* <!--
            Icon when menu is closed.

            Menu open: "hidden", Menu closed: "block"
          --> */}
                                <svg
                                    class="block h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                    />
                                </svg>
                                {/* <!--
            Icon when menu is open.

            Menu open: "block", Menu closed: "hidden"
          --> */}
                                <svg
                                    class="hidden h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div class="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                            {/* <a
                                href="#"
                                class="ml-6 inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sort by
                            </a> */}
                            {isSearchActive && (
                                <SortDropdown
                                    value={sortOption}
                                    onSortChange={onSortChange}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                {isMenuOpen && <MobileMenu />}
            </header>
        </>
    );
}

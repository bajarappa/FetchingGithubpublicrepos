// src/components/RepoCard.js
import React from "react";

// Functional component RepoCard
export default function RepoCard({ repo }) {
    // Return JSX for the RepoCard component
    return (
        <li
            key={repo.id}
            className="relative flex items-center space-x-4 py-4 bg-gray-100 p-4 rounded-lg"
        >
            <div className="min-w-0 flex-auto">
                <div className="flex min-w-0 gap-x-4">
                    {/* Repo owner's avatar */}
                    <img
                        className="h-12 w-12 flex-none rounded-full bg-gray-50"
                        src={repo.owner.avatar_url}
                        alt=""
                    />
                    <div className="min-w-0 flex-auto ">
                        {/* Repo name */}
                        <p className="text-sm font-semibold leading-6 text-gray-900">
                            {repo.name}
                        </p>
                        {/* Repo description */}
                        <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                            {repo.description}
                        </p>
                        {/* Repo details - stars, language */}
                        <div className="mt-2 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
                            {/* Stars icon */}
                            <div className="flex items-center gap-x-1">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                    />
                                </svg>
                                {/* Stars count */}
                                <p className="truncate">
                                    {repo.stargazers_count}
                                </p>
                            </div>

                            {/* Separator */}
                            <svg
                                viewBox="0 0 2 2"
                                className="h-0.5 w-0.5 flex-none fill-gray-300"
                            >
                                <circle cx="1" cy="1" r="1" />
                            </svg>

                            {/* Repo language */}
                            <p className="whitespace-nowrap">{repo.language}</p>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

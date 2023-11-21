import React from "react";

export default function SortDropdown({ value, onSortChange }) {
    return (
        <>
            <select
                className="mt-2 block w-min rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={value}
                onChange={(e) => onSortChange(e.target.value)}
            >
                <option value="stars">Stars</option>
                <option value="watchers">Watchers</option>
                <option value="score">Score</option>
                <option value="name">Name</option>
                <option value="created_at">Created At</option>
                <option value="updated_at">Updated At</option>
            </select>
        </>
    );
}

import React from "react";

export default function SortDropdown({ value, onSortChange }) {
    return (
        <>
            <select
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

import React from "react";

// Array of sorting options with both value and label
const sortOptions = [
    { value: "stars", label: "Stars" },
    { value: "watchers", label: "Watchers" },
    { value: "score", label: "Score" },
    { value: "name", label: "Name" },
    { value: "created_at", label: "Created At" },
    { value: "updated_at", label: "Updated At" },
];

// Functional component SortDropdown
const SortDropdown = ({ value, onSortChange }) => (
    <select
        // Styling classes for the dropdown
        className="mt-2 block w-min rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
        // Current selected value
        value={value}
        // Handle change event
        onChange={(e) => onSortChange(e.target.value)}
    >
        {/* Map over the sortOptions array to create option elements */}
        {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
                {/* Display label for the option */}
                {option.label}
            </option>
        ))}
    </select>
);

export default SortDropdown;

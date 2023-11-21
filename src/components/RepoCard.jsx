// src/components/RepoCard.js
import React from "react";

const RepoCard = ({ repo }) => {
    return (
        <div>
            <img src={repo.owner.avatar_url} alt="Avatar" />
            <h2>{repo.name}</h2>
            <p>Stars: {repo.stargazers_count}</p>
            <p>Description: {repo.description}</p>
            <p>Language: {repo.language}</p>
        </div>
    );
};

export default RepoCard;

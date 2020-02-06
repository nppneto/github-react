import React from 'react';

const Action = ({ getRepos, getStarred }) => (
    <div className="actions">
        <button className="btn" onClick={ getRepos }>Repositórios</button>
        <button className="btn" onClick={ getStarred }>Favoritos</button>
    </div>
);

export default Action;
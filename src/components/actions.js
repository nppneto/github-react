import React from 'react';

const Action = ({ getRepos, getStarred }) => (
    <div className="actions">
        <button onClick={ getRepos }>Ver repositórios</button>
        <button onClick={ getStarred }>Ver favoritos</button>
    </div>
);

export default Action;
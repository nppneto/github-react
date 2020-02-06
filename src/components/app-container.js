import React from 'react';
import Actions from './actions';
import Repos from './repos';
import UserInfos from './user-infos';
import SearchBar from './search-bar';
import PropTypes from 'prop-types';

const AppContainer = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
    <div className='App'>    
        <SearchBar handleSearch={ handleSearch }/>
        {!!userinfo && <UserInfos userinfo={ userinfo } />}
        {!!userinfo && <Actions getRepos={ getRepos } getStarred={ getStarred } />}

        {!!repos.length && 
        <Repos 
            className="repos" 
            title="Repositórios"
            repos={repos}/>
        }

        {!!starred.length &&
            <Repos 
            className="starred" 
            title="Favoritos" 
            repos={starred}/>
        }
    </div>
);

AppContainer.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContainer;
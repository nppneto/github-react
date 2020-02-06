import React from 'react';
import Actions from './actions';
import Repos from './repos';
import UserInfos from './user-infos';
import SearchBar from './search-bar';
import Loading from './loading';
import PropTypes from 'prop-types';

import '../App.css';

const AppContainer = ({ userinfo, repos, starred, isFetching, handleSearch, getRepos, getStarred }) => (
    <div className='App'>    
        <SearchBar isDisabled={ isFetching } handleSearch={ handleSearch }/>
        {isFetching && <Loading />}
        {!!userinfo && <UserInfos userinfo={ userinfo } />}
        {!!userinfo && <Actions getRepos={ getRepos } getStarred={ getStarred } />}

        <div className="row">
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
    </div>
);

AppContainer.propTypes = {
    userinfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContainer;
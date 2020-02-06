import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        <img src={ userinfo.avatar } alt=""/>

        <h2 className='username'><a href={`http://github.com/${userinfo.login}`}>{ userinfo.username }</a></h2>
        
        <ul className='repos-info'>
            <li> Repositórios: { userinfo.repos }</li>
            <li> Seguidores: { userinfo.followers }</li>
            <li> Seguindo: { userinfo.following }</li>
        </ul>
    </div>
);

UserInfo.propTypes = {
    userinfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired
    }),
}

export default UserInfo;
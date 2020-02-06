import React, { Component } from 'react';
import AppContainer from './components/app-container';
import axios from 'axios';

class App extends Component {
    constructor () {
        super();
        this.state = {
            userinfo: null,
            repos: [],
            starred: []
        }
    }

    handleSearch (e) {
        const value = e.target.value;
        const keyCode = e.which || e.keyCode;
        const ENTER = 13;

        if (keyCode === ENTER) {
            axios.get(`http://api.github.com/users/${value}`)
            .then((response) => {
                this.setState({
                    userinfo: {
                        username: response.data.name,
                        avatar: response.data.avatar_url,
                        login: response.data.login,
                        repos: response.data.public_repos,
                        followers: response.data.followers,
                        following: response.data.following
                    }
                })
            })
        }
    }

    getRepos (type) {
        let current_user = this.state.userinfo.login;
        let endpoint = `https://api.github.com/users/${current_user}/${type}`;
        axios.get(endpoint)
        .then((response) => {
            this.setState({
                [type]: response.data.map((repo) => ({
                    id: repo.id,
                    name: repo.name,
                    link: repo.html_url
                }))
            })
            console.log(this.state.repos);
        })
    }
    
    render () {
        return <AppContainer
            userinfo={ this.state.userinfo }
            repos={ this.state.repos }
            starred={ this.state.starred }
            handleSearch={ (e) => this.handleSearch(e) }
            getRepos={ () => this.getRepos('repos') }
            getStarred={ () => this.getRepos('starred') }
        />
    }
}

export default App;

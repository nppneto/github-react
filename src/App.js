import React, { Component } from 'react';
import AppContainer from './components/app-container';
import axios from 'axios';

class App extends Component {
    constructor () {
        super();
        this.state = {
            userinfo: null,
            repos: [],
            starred: [],
            isFetching: false
        }
    }

    getGitHubApiUrl (current_user, type = null) {
        let api_url = `https://api.github.com/users/${current_user}`;
        if (type !== null) {
            api_url = `https://api.github.com/users/${current_user}/${type}`;
        }
        return api_url;
    }

    handleSearch (e) {
        const value = e.target.value;
        const keyCode = e.keyCode;
        const ENTER = 13;
        //Guardo as informações do target
        // const target = e.target;

        if (keyCode === ENTER) {
            // Desabilito o campo de busca
            // target.disabled = true;
            this.setState({ isFetching: true });
            axios.get(this.getGitHubApiUrl(value))
            .then((response) => {
                this.setState({
                    userinfo: {
                        username: response.data.name,
                        avatar: response.data.avatar_url,
                        login: response.data.login,
                        repos: response.data.public_repos,
                        followers: response.data.followers,
                        following: response.data.following
                    },
                    // Para limpar os repositórios e favoritos
                    // Quando for feita uma nova pesquisa
                    repos: [],
                    starred: []
                })
            })
            .finally(() => {
                this.setState({ isFetching: false });
            })
        }
    }

    getRepos (type) {
        const current_user = this.state.userinfo.login;
        axios.get(this.getGitHubApiUrl(current_user, type))
        .then((response) => {
            this.setState({
                [type]: response.data.map((repo) => ({
                    id: repo.id,
                    name: repo.name,
                    link: repo.html_url
                }))
            });
        });
    }
    
    render () {
        return <AppContainer
            userinfo={ this.state.userinfo }
            repos={ this.state.repos }
            starred={ this.state.starred }
            isFetching={ this.state.isFetching }
            handleSearch={ (e) => this.handleSearch(e) }
            getRepos={ () => this.getRepos('repos') }
            getStarred={ () => this.getRepos('starred') }
        />
    }
}

export default App;

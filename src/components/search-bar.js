import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ handleSearch }) => (
    <div className='search'>
        <input type='search' placeholder='Digite o nome do usuário do GitHub'
        onKeyUp={ handleSearch }
        />
    </div>
);

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;
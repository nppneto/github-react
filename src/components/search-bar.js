import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ isDisabled, handleSearch }) => (
    <div className='search'>
        <input 
        type='search' 
        placeholder='Digite o nome do usuário do GitHub' 
        disabled={ isDisabled }
        onKeyUp={ handleSearch }
        />
    </div>
);

SearchBar.propTypes = {
    handleSearch: PropTypes.func.isRequired
}

export default SearchBar;
// Packages
import React, { Component } from 'react';
// Components

// Helpers

const Search_Bar = props => (
<input
    onChange={(event) => props.handleSearchQueryChange(event)}
    placeholder={'Search...'}/>
);

export default Search_Bar;
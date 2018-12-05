// Packages
import React, { Component } from 'react';
// Components

// Helpers

const Search_Bar = props => (
<input
    onChange={(event) => props.handleSearchQueryChange(event.target.value)}
    placeholder={'Search...'}/>
);

export default Search_Bar;
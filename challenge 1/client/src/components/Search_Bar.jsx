// Packages
import React, { Component } from 'react';
// Components

// Helpers

const Search_Bar = props => (
<input  onChange={(event) => props.handleSearchQueryChange(event.target.value)}
        placeholder={'Search...'}
        onKeyDown={(event) => props.handleQuerySubmit(event.keyCode)} />
);

export default Search_Bar;
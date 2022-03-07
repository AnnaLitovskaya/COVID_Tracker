import React, { Component } from 'react';
import CurrentValues from './CurrentValues';

const Search = () => {
  return (
    <div id="search-wrapper">
      <CurrentValues />
      <div>Get Statistics By Date</div>
      <div>Get Statistics By State</div>
    </div>
  );
};

export default Search;

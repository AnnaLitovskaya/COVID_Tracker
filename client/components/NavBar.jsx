import React from 'react';

function NavBar() {
  return (
    <div id="navbar-wrapper">
      <a href="/" className="navbar-buttons">
        <span id="covid-button">COVID-19 Tracker</span>{' '}
      </a>
      <a href="/#/search" className="navbar-buttons">
        <button type="button">Search Data</button>
      </a>
    </div>
  );
}

export default NavBar;

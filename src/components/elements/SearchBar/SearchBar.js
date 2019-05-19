import React, { Component } from 'react';

import FontAwesome from 'react-fontawesome';
import './SearchBar.css'

var scrollToElement = require('scroll-to-element');

class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  doSearch = (event) => {
    //use user input as value for state
    this.setState({ value: event.target.value })
    clearTimeout(this.timeout);
    //scroll to grid of movies when a search is made 
    scrollToElement('.home-grid', {
      offset: -120,
      ease: 'out-bounce',
      duration: 1000
    });
    this.timeout = setTimeout( () => {
      this.props.callback(this.state.value);
    }, 0); //delay, kept as 0 to appear faster
  }

  render(){
    return (
      <div className="searchbar">
        <div className="searchbar-content">
          <FontAwesome className="fa-search" name="search" size="2x" />
          <input
            type="text"
            className="searchbar-input"
            placeholder="Search"
            onChange={this.doSearch}
            value={this.state.value}
          />
        </div>
      </div>
    )
  }
}

export default SearchBar;
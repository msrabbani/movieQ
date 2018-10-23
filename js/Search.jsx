// @flow

import React from 'react';
import {connect} from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

// mengubah es6 component menjadi Functional Component,
// eliminate state, karena kita akan mengakses state ke redux
// eliminate handleSearchTerm

const Search = (props: {
  searchTerm: string,
  shows: Array<Show>,
  handleSearchTermChange: Function,
}) => (
  <div className="search">
    <Header
      searchTerm={props.searchTerm}
      showSearch
      handleSearchTermChange={props.handleSearchTermChange}
    />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0,
        )
        .map(show => <ShowCard key={show.imdbID} {...show} />)}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(Search);

// @flow

import React from 'react';
import {connect} from 'react-redux';
import ShowCard from './ShowCard';
import Header from './Header';

// mengubah es6 component menjadi Functional Component,
// eliminate state, karena kita akan mengakses state ke redux
// eliminate handleSearchTerm

const Search = (props: {searchTerm: string, shows: Array<Show>}) => (// eslint-disable-line react/no-unused-prop-types
  <div className="search">
    <Header showSearch />
    <div>
      {props.shows
        .filter(
          show =>
            `${show.title} ${show.description}`
              .toUpperCase()
              .indexOf(props.searchTerm.toUpperCase()) >= 0,
        )
        .map((show, index) => 
          <ShowCard key={show.imdbID} {...show} id={index} />
        )}
    </div>
  </div>
);

const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export const Unwrapped = Search;
export default connect(mapStateToProps)(Search);

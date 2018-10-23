// @flow

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import type { RouterHistory } from 'react-router-dom';
import {setSearchTerm} from './actionCreators';

class Landing extends Component {

  props: {
    searchTerm: string,
          handleSearchTermChange: Function,
          history: RouterHistory
  };
  
    goSearch = (event: SyntheticEvent) => {
        event.preventDefault();
        this.props.history.push('/search');
    }

  render() {
    return (
      <div className="app">
        <div className="landing">
            <h1>{this.props.searchTerm}</h1>
            <form onSubmit= {this.goSearch}>
          <input
            onChange={this.props.handleSearchTermChange}
            value={this.props.searchTerm}
            type="text"
            placeholder="Search"
        />
    </form>
          <Link to="/search"> Browser All</Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({searchTerm: state.serachTerm});
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(event) {
    dispatch(setSearchTerm(event.target.value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);

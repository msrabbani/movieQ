// @flow

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Landing = () => (
  <div className="app">
    <div className="landing">
      <h1>Browser Anythings</h1>
      <input type="text" placeholder="Search" />
      <Link to="/search"> Browser All</Link>
    </div>
  </div>
);

const mapStateToProps = state => ({ searchTerm: state.serachTerm})

export default connect(mapStateToProps)(Landing);

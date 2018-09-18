import React, {Component} from 'react';
import DataPilem from '../data.json';
import ShowCard from './ShowCard';

class Search extends Component {
  /* constructor(props) {
    super(props);

    this.state = {
      searchTerm: 'this is some sort debug statment'
    };

    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
  }

  handleSearchTermChange(event) {
    this.setState({ searchTerm: event.target.value });
  }*/

  state = {
    searchTerm: '',
  };
  handleSearchTermChange = event => {
    this.state({searchTerm: event.target.value});
  };

  render() {
    return (
      <div className="search">
        {/* <pre><code> {JSON.stringify(DataPilem, null,4)} </code></pre>*/}

        {/* {DataPilem.shows.map(show => <h3>{show.title}</h3> )}*/}

        <header>
          <h1>videoQ</h1>
          <input
            onChange={this.handleSearchTermChange}
            value={this.state.searchTerm}
            type="text"
            placeholder="Search"
          />
        </header>
        <div>
          {DataPilem.shows.map(show => (
            <ShowCard key={show.imdbID} {...show} />
          ))}
        </div>
      </div>
    );
  }
}

export default Search;

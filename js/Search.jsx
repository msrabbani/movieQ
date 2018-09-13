import React from 'react'
import DataPilem from '../data.json'
import ShowCard from './ShowCard'

const Search = () => (
    <div className="search"> 
        {/* <pre><code> {JSON.stringify(DataPilem, null,4)} </code></pre>*/}

        {/* {DataPilem.shows.map(show => <h3>{show.title}</h3> )}*/}
        <div>
        {DataPilem.shows.map(show => 
            <ShowCard key={show.imdbID} {...show} />
        )}
        </div>
    </div>
 )

    export default Search

import React from 'react';
import {Component} from 'react';
import {SearchResult} from './../../models';
import SearchPerson from './SearchPerson';

class SearchResults extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-results">
                <ul>
                    {this.props.result.persons.map((p, i)=>{
                        return <SearchPerson key={`Person${i}`} person={p} />
                    })}
                </ul>
            </div>
        )
    }
}

SearchResults.defaultProps = {
    result: new SearchResult()
};

SearchResults.propTypes = {
    result: React.PropTypes.object
};

export default SearchResults;
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
            <div>
                <ul>
                    {this.props.result.persons.map((p)=>{
                        return <SearchPerson person={p} />
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
    result: React.PropTypes.objectOf(SearchResult).isRequired
};

export default SearchResults;
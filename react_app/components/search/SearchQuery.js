import React from 'react';
import {Component} from 'react';
import {QueryRequest} from './../../models';

class SearchQuery extends Component {

    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        let qr = new QueryRequest(e.target.value);
        this.props.onChange(qr);
    }

    render() {
        return (
            <div className="search-query">
                <input placeholder="Type your search query" onChange={this.onChange} />
            </div>
        )
    }
}

SearchQuery.defaultProps = {
    onChange: ()=>{}
};

SearchQuery.propTypes = {
    onChange: React.PropTypes.func.isRequired
};

export default SearchQuery;
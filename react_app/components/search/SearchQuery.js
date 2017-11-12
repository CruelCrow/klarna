import React from 'react';
import {Component} from 'react';
import {Consts} from './../../constants';
import {QueryRequest} from './../../models';

class SearchQuery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastChangeTimestamp: null
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (e.target.value.length > 1) {
            let qr = new QueryRequest(e.target.value);
            this.props.onChange(qr);
        }
    }

    render() {
        return (
            <div className="search-query">
                <input placeholder="Type your search query" onChange={this.onChange} disabled={this.props.disabled} />
            </div>
        )
    }
}

SearchQuery.defaultProps = {
    onChange: ()=>{},
    disabled: false
};

SearchQuery.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool
};

export default SearchQuery;
import React from 'react';
import {Component} from 'react';
import {Consts} from './../../constants';
import {QueryRequest} from './../../models';
import Loading from './../Loading';

class SearchQuery extends Component {

    constructor(props) {
        super(props);

        this.state = {
            lastChangeTimestamp: null
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        if (e.target.value.length == 1) {
            return;
        }

        let qr = new QueryRequest(e.target.value);
        this.props.onChange(qr);
    }

    render() {
        return (
            <div className="search-query">
                {this.props.loading && <Loading visible={true}/>}
                <input type="text" placeholder="Type your search query" onChange={this.onChange} disabled={this.props.disabled} autoFocus={this.props.autoFocus} />
            </div>
        )
    }
}

SearchQuery.defaultProps = {
    onChange: ()=>{},
    disabled: false,
    loading: false,
    autoFocus: false
};

SearchQuery.propTypes = {
    onChange: React.PropTypes.func.isRequired,
    disabled: React.PropTypes.bool,
    loading: React.PropTypes.bool,
    autoFocus: React.PropTypes.bool
};

export default SearchQuery;
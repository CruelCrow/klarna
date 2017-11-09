import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';

class SearchPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <SearchQuery />
                <SearchResults />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


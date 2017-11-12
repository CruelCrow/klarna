import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Consts} from './../../constants';
import Error from './../Error';
import Loading from './../Loading';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';
import {search, searchEndLoading, searchStartLoading} from './../../actions/search';

class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            q: null,
            currentPage: 0,

            lastAttemptToRecoverAfterErrorTimestamp: new Date(),
            lastSearchQuery: null,
            isLoading: false,
            searchResult: null
        };

        this.performSearch = this.performSearch.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.searchState.lastSearchResultTimestamp != nextProps.searchState.lastSearchResultTimestamp) {
            this.props.searchEndLoading();
        }

        if (!this.props.searchState.error && !!nextProps.searchState.error) {
            this.props.searchEndLoading();
        }

        if (this.props.searchState.isLoading != !nextProps.searchState.isLoading) {
            if (this.state.lastSearchQuery) {
                this.performSearch(this.state.lastSearchQuery, true);
            }
        }
    }

    performSearch(q, force = false) {
        if (this.props.searchState.isLoading && !force) {
            this.state.lastSearchQuery = q;
        } else {
            this.state.q = q;
            this.state.currentPage = 0;
            this.state.lastSearchQuery = null;
            this.loadMore();
        }
    }

    loadMore() {
        if (this.state.q && (this.state.q.name || this.state.q.age || this.state.q.phone)) {
            this.props.searchStartLoading();
            this.props.search(this.state.q.name, this.state.q.age, this.state.q.phone, ++this.state.currentPage);
        }
    }

    render() {
        return (
            <div
                className={`search-page ${this.props.searchState.isLoading ? 'loading' : ''} ${this.state.lastSearchQuery ? 'search-query-deprecated' : ''}`}>
                <SearchQuery onChange={this.performSearch} loading={this.props.searchState.isLoading}/>
                {this.props.searchState.error && <Error error={this.props.searchState.error}/>}
                <SearchResults result={this.props.searchState.searchResult}/>
                {!!this.props.searchState.searchResult.persons.length > 0 &&
                <did className="load-more">
                    {this.props.searchState.isLoading && <Loading visible={true}/>}
                    <button onClick={this.loadMore} disabled={this.props.searchState.isLoading}>Load more</button>
                </did>}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        searchState: state.search
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({search, searchEndLoading, searchStartLoading}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


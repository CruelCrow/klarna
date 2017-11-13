import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Consts} from './../../constants';
import Error from './../Error';
import Loading from './../Loading';
import SearchQuery from './SearchQuery';
import SearchResults from './SearchResults';
import {search, searchEndLoading, searchStartLoading, clearSearch} from './../../actions/search';

class SearchPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            q: null,
            currentPage: 0,
            lastSearchQuery: null
        };

        this.performSearch = this.performSearch.bind(this);
        this.loadMore = this.loadMore.bind(this);
        this.resultKey = this.resultKey.bind(this);
        this.isLoading = this.isLoading.bind(this);
    }

    resultKey() {
        return `Result:name${this.state.q.name ? this.state.q.name : ''}:age${this.state.q.age ? this.state.q.age : ''}:phone${this.state.q.phone ? this.state.q.phone : ''}`;
    }

    isLoading() {
        return Object.values(this.props.searchState.stillLoading).filter((l) => l == true).length > 0;
    }

    performSearch(q) {
        this.state.q = q;
        this.state.currentPage = 0;
        this.state.lastSearchQuery = null;
        this.loadMore();
    }

    loadMore() {
        if (this.state.q) {
            if (this.state.q.q.length == 0) {
                this.props.clearSearch();
            } else if (this.state.q.name || this.state.q.age || this.state.q.phone) {
                this.props.searchStartLoading(this.resultKey());
                this.props.search(this.state.q.name, this.state.q.age, this.state.q.phone, ++this.state.currentPage);
            }
        }
    }

    render() {
        let searchResult = null;
        if (this.state.q) {
            searchResult = this.props.searchState.searchResults[this.resultKey()];
            searchResult = searchResult || this.props.searchState.searchResult;
        } else {
            searchResult = this.props.searchState.searchResult;
        }

        let isLoading = this.isLoading();

        return (
            <div
                className={`search-page ${isLoading ? 'loading' : ''} ${this.state.lastSearchQuery ? 'search-query-deprecated' : ''}`}>
                <SearchQuery onChange={this.performSearch} loading={isLoading} autoFocus={true}/>
                {this.state.q && searchResult.persons.length == 0 && !isLoading &&
                <div className="no-results">No results</div>}
                {this.props.searchState.error && <Error error={this.props.searchState.error}/>}
                <SearchResults result={searchResult}/>
                {!!searchResult.persons.length > 0 &&
                <did className="load-more">
                    {isLoading && <Loading visible={true}/>}
                    <button onClick={this.loadMore} disabled={isLoading}>Load more</button>
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
    return bindActionCreators({search, searchEndLoading, searchStartLoading, clearSearch}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);


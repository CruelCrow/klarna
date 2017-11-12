import {Consts} from './../constants';
import {SearchResult} from './../models';
import extend from './../utils/extend';
import KlarnaApiError from './../utils/KlarnaApiError';

const initialState = {
    error: null,
    isLoading: false,

    lastSearchRequestId: null,
    searchResult: new SearchResult(),
    lastSearchResultTimestamp: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Consts.ACTIONS.SEARCH:
            if (action.error) {
                return extend({}, state, {
                    error: action.payload
                });
            } else {
                let searchResult = state.searchResult;
                if (parseInt(action.payload.data.request_params.page) > 1) {
                    state.searchResult.add(action.payload.data.persons);
                } else {
                    searchResult = new SearchResult(action.payload.data.persons)
                }
                return extend({}, state, {
                    searchResult: searchResult,
                    lastSearchResultTimestamp: new Date(),
                    error: null
                });
            }
            break;
        case Consts.ACTIONS.SEARCH_START_LOADING:
            return extend({}, state, {
                isLoading: true
            });
            break;
        case Consts.ACTIONS.SEARCH_END_LOADING:
            return extend({}, state, {
                isLoading: false
            });
            break;

        default:
            return state;
    }
}
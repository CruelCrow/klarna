import {Consts} from './../constants';
import {SearchResult} from './../models';
import extend from './../utils/extend';
import KlarnaApiError from './../utils/KlarnaApiError';

const initialState = {
    error: null,
    stillLoading: {},

    searchResult: new SearchResult(),
    searchResults: {},
    lastFinishedRequest: null,
    lastSearchResultTimestamp: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case Consts.ACTIONS.SEARCH:
            if (action.error) {
                return extend({}, state, {
                    error: action.payload,
                    stillLoading: []
                });
            } else {
                let r = action.payload.data.request_params;
                let key = `Result:name${r.name}:age${r.age}:phone${r.phone}`;
                if (parseInt(r.page) > 1) {
                    state.searchResult.add(action.payload.data.persons);
                } else {
                    state.searchResult = new SearchResult(action.payload.data.persons)
                }
                state.searchResults[key] = state.searchResult;
                state.stillLoading[key] = false;
                return extend({}, state, {
                    searchResult: state.searchResult,
                    searchResults: state.searchResults,
                    lastSearchResultTimestamp: new Date(),
                    error: null,
                    stillLoading: state.stillLoading
                });
            }
            break;
        case Consts.ACTIONS.SEARCH_START_LOADING:
            state.stillLoading[action.payload] = true;
            return extend({}, state, {
                stillLoading: state.stillLoading
            });
            break;
        /*case Consts.ACTIONS.SEARCH_END_LOADING:
            state.stillLoading[action.payload] = false;
            return extend({}, state, {
                stillLoading: state.stillLoading
            });
            break;*/
        case Consts.ACTIONS.CLEAR_SEARCH:
            return extend({}, state, {
                searchResult: new SearchResult()
            });
            break;

        default:
            return state;
    }
}
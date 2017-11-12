import search from './search';
import {combineReducers} from 'redux';

const appReducer = combineReducers({
    search: search,
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;

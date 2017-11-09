import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from '../reducers';

const middlewares = applyMiddleware(ReduxPromise);
const store = createStore(
    reducers,
    middlewares
);

export default store;
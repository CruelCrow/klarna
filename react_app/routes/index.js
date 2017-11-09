import React from 'react';
import {Route, IndexRoute, IndexRedirect} from 'react-router';

import App from '../components/App';
import PageNotFound from '../components/PageNotFound';
import SearchPage from '../components/search/SearchPage';
import {Consts} from '../constants';

export default (
    <Route path="/" component={App}>

        <IndexRoute component={SearchPage}/>

        <Route path="*" component={PageNotFound}/>

    </Route>
);

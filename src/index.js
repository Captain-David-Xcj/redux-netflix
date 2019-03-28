import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './modules';
import routes from './routes.js';

ReactDOM.render((
    <Provider store={createStore(reducers)}>
        {routes}
    </Provider>)
    , document.getElementById('app'));
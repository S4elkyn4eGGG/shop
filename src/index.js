import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from 'reducers';

import Main from 'containers/Main';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Provider store={store}>
                <Route path={'/'} component={Main} exact/>
            </Provider>
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));

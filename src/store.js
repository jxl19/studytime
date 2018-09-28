import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import {appReducer} from './reducers/reducer';
import createHistory from 'history/createBrowserHistory'

const history = createHistory();

const middleware = [
    thunk,
    routerMiddleware(history)
];

export default createStore(appReducer, applyMiddleware(...middleware));


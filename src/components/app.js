import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './LoginContainer';
import HomePage from './HomePage';
import RoutePrivate from './RoutePrivate';
import createHistory from 'history/createBrowserHistory';
import './App.css';

const history = createHistory()
class App extends React.Component {

    render() {
        return (
            <div className="app">
                <Router history={history}>
                    <Switch>
                        <Route exact path="/aa" component={LoginContainer} />
                        <Route exact path="/" component={HomePage} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default connect()(App);
import React from 'react';
import { connect } from "react-redux";
import { BrowserRouter  as Router, Route, Switch } from 'react-router-dom';
import LoginContainer from './LoginContainer';
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
                        <Route exact path="/" component={LoginContainer} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default connect()(App);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DashBoard from './DashBoard';


class HomePage extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <DashBoard />
                <div className="container">
                    hello homepage
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(HomePage);
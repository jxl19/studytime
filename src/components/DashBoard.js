import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './DashBoard.css';

class DashBoard extends Component {
    handleClick(e) {
        e.preventDefault();

    }
    burgerToggle(e) {
        let linksEl = document.querySelector('.narrowLinks');
        if (linksEl.style.display === 'block') {
            linksEl.style.display = 'none';
        } else {
            linksEl.style.display = 'block';
        }
    }
    render() {
        return (
            <nav className="dashboard">
                <ul className="navWide">
                    <li id="nametheselater">
                        <h4 className="logo">StudyTime</h4>
                    </li>
                    <li id="nametheselater">
                        <h4 className="logo">Logout</h4>
                    </li>
                    <li id="nametheselater">
                        <h4 className="logo">My Account</h4>
                    </li>
                </ul>
                <div className="navNarrow">
                    <i className="fas fa-bars fa-3x" onClick={(e) => this.burgerToggle(e)}></i>
                        <div className="logohome">StudyTime</div>
                    <div className="narrowLinks">
                        <div onClick={e => this.handleClick(e)}>
                            <h4 className="burgermenu" id="nametheselater">
                                My Account
                            </h4>
                        </div>
                        <div onClick={e => this.logout(e)}>
                            <h4 className="burgermenu" id="/">
                                Sign-Out
                            </h4>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(DashBoard);
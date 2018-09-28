import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Redirect, withRouter } from 'react-router-dom';
import {login} from '../reducers/reducer';
import FormInput from './FormInput';
import './Login.css';
class Login extends Component {
    constructor(props) {
        super(props);

        //dispatch logout here?
        this.state = {
            email: '',
            username: '',
            password:'',
            touched: {
                email: false,
                password: false,
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const {name, value} = e.target;
        this.setState({ [name]: value});
    }

    handleFormSubmit(e) {
        e.preventDefault();
        console.log(this.state.password, this.state.email, this.state.username);
        return this.props.login ({
            email: this.state.email,
            username: this.state.username.toLowerCase(),
            password: this.state.password
        })
    }
    //checking to see if a input field has been passed
    handleBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true },
        });
    }
    //checks if any of these returns true(error)
    validated = (email, username, password) => {
        console.log(password, email, username);
        return {
            email: email.length === 0,
            username: username.length === 0,
            password: password.length < 6,
        }
    }

    render() {
        //setting the parameters for errors
        //if there are errors and has been 'touched', return err
        const errors = this.validated(this.state.email, this.state.username, this.state.password);
        
        const shouldMarkError = (field) => {
            return errors[field] && this.state.touched[field];
        }
        
        //disables button if there are any errors defined above
        const isDisabled = Object.keys(errors).some(i => errors[i]);
        return (
            <div className='form-container'>
                <h2 className="heading">LET'S GET STARTED</h2>
                <form onSubmit={e =>this.handleFormSubmit(e)}>
                    <FormInput
                        className={shouldMarkError('email') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('email')}
                        inputType={'email'}
                        title={'Business Email'}
                        name={'email'}
                        controlFunction={this.handleChange}
                        content={this.state.email}
                        placeholder={'Enter Business Email'}
                        showError={shouldMarkError('email') ? "show-error" : "hide-error"}
                        errorMessage={"Please enter a valid email address."}
                    />
                    <FormInput
                        className={shouldMarkError('username') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('username')}
                        inputType={'text'}
                        title={'Username'}
                        name={'username'}
                        controlFunction={this.handleChange}
                        placeholder={'Username'}
                        showError={shouldMarkError('username') ? "show-error" : "hide-error"}
                        errorMessage={"Please enter your desired username."}
                    />
                    <FormInput
                        className={shouldMarkError('password') ? "form-control error" : "form-control"}
                        onBlur={this.handleBlur('password')}
                        inputType={'password'}
                        title={'Password'}
                        name={'password'}
                        condition={'6 characters | 1 uppercase | 1 lowercase | 1 digit'}
                        controlFunction={this.handleChange}
                        placeholder={'Password'}
                        showError={shouldMarkError('password') ? "show-error" : "hide-error"}
                        errorMessage={"Password should have six characters."}
                    />
                    <div className="btn-container">
                        <button disabled={isDisabled} type="submit" className="btn btn-submit">REGISTER</button>
                        {/* <button type="submit" className="btn btn-submit">REGISTER</button> */}
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    login: (attributes) => {
        dispatch(login(attributes));
    }
})


export default withRouter(connect(null, mapDispatchToProps)(Login));
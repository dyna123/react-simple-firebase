import React, { Component } from 'react';
import firebase from '../../../config/firebase';

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state
        console.log('data before send', email, password);
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(res => {
                console.log('success', res);
            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ...
            });
    }

    render() {
        return (
            <div>
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} />
                    <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} />
                    <button className="btn" onClick={this.handleRegisterSubmit}>Register</button>
                </div>
                {/* <button>Go to dashboard</button> */}
            </div>
        )
    }
}

export default Register
import React, { Component } from 'react';
// import firebase from '../../../config/firebase';
import Button from '../../../components/atom/Button';
import { registerUserAPI } from '../../../config/redux/action';
import { connect } from 'react-redux';

class Register extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleRegisterSubmit = async () => {
        const { email, password } = this.state
        const { history } = this.props
        const res = await this.props.registerAPI({ email, password }).catch(err => err)
        if (res) {
            this.setState({
                email: '',
                password: ''
            })
            history.push('/login')
        }
    }

    render() {
        return (
            <div>
                <div className="auth-card">
                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleRegisterSubmit} title="Register" Loading={this.props.isLoading} />
                </div>
                {/* <button>Go to dashboard</button> */}
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Register)
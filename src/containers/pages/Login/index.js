import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../../../components/atom/Button';
import { loginUserAPI } from '../../../config/redux/action';
// import { actionUserName } from '../../../config/redux/action';


class Login extends Component {
    state = {
        email: '',
        password: '',
    }

    handleChangeText = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleLoginSubmit = async () => {
        const { email, password } = this.state
        const { history } = this.props
        const res = await this.props.loginAPI({ email, password }).catch(err => err)
        if (res) {
            console.log('login success');
            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        } else {
            console.log('login failed');
        }
    }

    render() {
        return (
            <div>
                <div className="auth-card">
                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" placeholder="email" type="text" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" placeholder="password" type="password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleLoginSubmit} title="Login" Loading={this.props.isLoading} />
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
    loginAPI: (data) => dispatch(loginUserAPI(data))
})

export default connect(reduxState, reduxDispatch)(Login)
// Redux thunk demo
// ChangeUser = () => {
//     this.props.changeUserName()
// }
// render() {
//     return (
//         <div>
//             <p>Login Page {this.props.username}</p>
//             <button onClick={this.ChangeUser}>Change User Name</button>
//             <button>Go to dashboard</button>
//         </div>
//     )
// }
// const reduxState = (state) => ({
//     popupProps: state.popup,
//     username: state.user
// })

// const reduxDispatch = (dispatch) => ({
//     changeUserName: () => dispatch(actionUserName())
// })
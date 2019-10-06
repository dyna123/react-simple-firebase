import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionUserName } from '../../../config/redux/action';


class Login extends Component {
    ChangeUser = () => {
        this.props.changeUserName()
    }
    render() {
        return (
            <div>
                <p>Login Page {this.props.username}</p>
                <button onClick={this.ChangeUser}>Change User Name</button>
                <button>Go to dashboard</button>
            </div>
        )
    }
}

const reduxState = (state) => ({
    popupProps: state.popup,
    username: state.user
})

const reduxDispatch = (dispatch) => ({
    changeUserName: () => dispatch(actionUserName())
})

export default connect(reduxState, reduxDispatch)(Login)
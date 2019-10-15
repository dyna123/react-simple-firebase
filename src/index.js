import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/pages/App';
import * as serviceWorker from './serviceWorker';

// import firebase from './config/firebase';



ReactDOM.render(<App />, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();



    // Promise
    // callFirstName = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve("Idham")
    //         }, 3000)
    //     })
    // }
    // callLastName = () => {
    //     return new Promise((resolve) => {
    //         setTimeout(() => {
    //             resolve(" Kholid")
    //         }, 3000)
    //     })
    // }


    // Asyncronus await
    // login = async () => {
    //     const first = await this.callFirstName()
    //     const last = await this.callLastName()
    //     const name = first + last
    //     this.setState({
    //         text: name
    //     })

    // Promise.all
    // Promise.all([this.callFirstName(), this.callLastName()])
    //     .then(([result, result2]) => {
    //         this.setState({ text: result + result2 })
    //     })

    // Channing
    // this.callFirstName().then(result => {
    //     return this.callLastName(result)
    // })
    //     .then(result2 => {
    //         this.setState({
    //             text: result2
    //         })
    //     })

    // Callback
    // callFirstName = callBack => {
    //     setTimeout(() => {
    //         callBack("Idham")
    //     }, 3000)
    // }
    // callLastName = (cb) => {
    //     setTimeout(() => {
    //         cb("Kholid")
    //     }, 3000)
    // }
    // this.callFirstName(result => {
    //     const first = result
    //     this.callLastName((result2) => {
    //         const last = result2
    //         const name = first + last
    //         this.setState({ text: name })
    //     })
    // })
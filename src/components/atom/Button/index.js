import React from 'react';

const Button = ({ title, onClick, Loading }) => {
    if (Loading) {
        return <button className="btn" onClick={onClick}>Loading...</button>
    }
    return (
        <button className="btn" onClick={onClick}>{title}</button>
    )
}

export default Button
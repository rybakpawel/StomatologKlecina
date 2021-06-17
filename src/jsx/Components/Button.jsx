import React from 'react'

const Button = ({ variant, title }) => {
    return (
        <button className={`button--${variant}`}>{title}</button>
    )
}

export default Button;
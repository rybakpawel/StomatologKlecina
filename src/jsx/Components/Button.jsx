import React from 'react'

const Button = ({ type = 'button', variant, title, padding = { padding: '1rem 2.8rem' } }) => {
    return (
        <button
            type={type}
            className={`button--${variant}`}
            style={{ ...padding }}>{title}
        </button>
    )
}

export default Button;
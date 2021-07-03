import React from 'react'

const Button = ({ variant, title, padding = { padding: '1rem 2.8rem' } }) => {
    return (
        <button
            className={`button--${variant}`}
            style={{ ...padding }}>{title}
        </button>
    )
}

export default Button;
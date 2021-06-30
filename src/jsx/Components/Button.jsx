import React from 'react'

const Button = ({ variant, title, font = { fontSize: '1.6rem' }, padding = { padding: '1rem 2.8rem' } }) => {
    return (
        <button className={`button--${variant}`} style={{ ...font, ...padding }}>{title}</button>
    )
}

export default Button;
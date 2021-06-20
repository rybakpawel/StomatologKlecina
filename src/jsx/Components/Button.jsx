import React from 'react'

const Button = ({ variant, title, font = { fontSize: '1.8rem' } }) => {
    return (
        <button className={`button--${variant}`} style={font}>{title}</button>
    )
}

export default Button;
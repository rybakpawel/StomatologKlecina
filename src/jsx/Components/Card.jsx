import React from 'react'
import Button from './Button'

const Card = ({ icon, title, description, button }) => {
    return (
        <div className='card'>
            <div className='card__iconWrapper'>
                <img className='card__icon' src={icon} alt="icon" />
            </div>
            <h3 className='card__title'>{title}</h3>
            <p className='card__description'>{description}</p>
            {button ? <Button variant='border-color' title={button} /> : null}
        </div>
    )
}

export default Card;
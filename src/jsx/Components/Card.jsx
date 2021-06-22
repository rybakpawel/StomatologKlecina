import React from 'react'
import Button from './Button'

const Card = ({ icon, title, description, button }) => {
    return (
        <div className='card'>
            {button ?
                <img src={icon} alt="icon" style={{ maxWidth: '7.5rem' }} /> :
                <div className='card__iconWrapper'>
                    <img src={icon} alt="icon" style={{ maxWidth: '5.5rem' }} />
                </div>
            }
            <h3 className='card__title' style={button ? { fontSize: '1.8rem' } : { fontSize: '2.6rem' }}>{title}</h3>
            <p className='card__description' style={button ? { fontSize: '1.6rem' } : { fontSize: '2rem' }}>{description}</p>
            {button ? <Button variant='border-color' title={button} font={{ fontSize: '1.4rem' }} /> : null}
        </div>
    )
}

export default Card;
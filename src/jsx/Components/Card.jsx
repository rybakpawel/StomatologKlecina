import React, { useState, useEffect } from 'react'
import Button from './Button'
import getWidth from '../utils/orientation'

const Card = ({ icon, title, description, button }) => {
    const [width, setWidth] = useState(getWidth());

    const handleWidth = () => {
        setWidth(getWidth());
    };

    useEffect(() => {
        window.addEventListener('resize', handleWidth);
        return () => window.removeEventListener('resize', handleWidth);
    }, []);

    return (
        <div className='card'>
            {button ?
                <img src={icon} alt="icon" style={{ maxWidth: '7.5rem' }} /> :
                <div className='card__iconWrapper'>
                    <img src={icon} alt="icon" style={{ maxWidth: '5.5rem' }} />
                </div>
            }
            <h3 className='card__title' style={!button && width < 640 ? { fontSize: '2.6rem' } : null}>{title}</h3>
            <p className='card__description' style={!button && width < 640 ? { fontSize: '2rem' } : null}>{description}</p>
            <div className='card__button-wrapper'>
                {button ? <Button variant='border-color' title={button} font={{ fontSize: '1.4rem' }} /> : null}
            </div>
        </div>
    )
}

export default Card;
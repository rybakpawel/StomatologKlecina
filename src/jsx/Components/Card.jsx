import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { isMobile } from 'react-device-detect'
import WidthContext from '../context/widthContext'
import Button from './Button'

const Card = ({ icon, title, description, button, link }) => {
    const { width } = useContext(WidthContext)

    const [isShort, setIsShort] = useState(!isMobile)
    const handleCardsAnimation = () => {
        if (isMobile) return null
        setIsShort(!isShort)
    }

    return (
        <div className='card' onMouseEnter={handleCardsAnimation} onMouseLeave={handleCardsAnimation}>
            <div className={`card__information-wrapper ${isShort && button ? 'card__information-wrapper--short' : ''}`}>
                {button ?
                    <img
                        src={icon}
                        alt="icon"
                        style={{ maxWidth: '7.5rem' }} /> :
                    <div className='card__icon-wrapper'>
                        <img
                            src={icon}
                            alt="icon"
                            style={{ maxWidth: '5.5rem' }} />
                    </div>
                }
                <h3
                    className='card__title'
                    style={!button && width < 640 ? { fontSize: '2.6rem' } : null}>
                    {title}
                </h3>
                <p
                    className={`card__description ${isShort && button ? 'card__description--short' : ''}`}
                    style={!button && width < 640 ? { fontSize: '2rem' } : null}>
                    {description}
                </p>
            </div>

            <div
                className={`card__button-wrapper ${isShort && button ? 'card__button-wrapper--short' : ''}`}>
                {button ?
                    <Link to={link}>
                        <Button
                            variant='border-color'
                            title={button} />
                    </Link>
                    : null}
            </div>
        </div>
    )
}

export default Card;
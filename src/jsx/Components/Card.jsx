import React, { useContext, useState } from 'react'
import { isMobile } from 'react-device-detect'
import WidthContext from '../context/widthContext'
import Button from './Button'

const Card = ({ icon, title, description, isButton }) => {
    const { width } = useContext(WidthContext)

    const [isShort, setIsShort] = useState(!isMobile)
    const handleCardsAnimation = (e) => {
        if (isMobile) return null
        setIsShort(!isShort)
    }

    return (
        <div className='card' onMouseEnter={handleCardsAnimation} onMouseLeave={handleCardsAnimation}>
            <div className={`card__information-wrapper ${isShort && isButton ? 'card__information-wrapper--short' : ''}`}>
                {isButton ?
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
                    style={!isButton && width < 640 ? { fontSize: '2.6rem' } : null}>
                    {title}
                </h3>
                <p
                    className={`card__description ${isShort && isButton ? 'card__description--short' : ''}`}
                    style={!isButton && width < 640 ? { fontSize: '2rem' } : null}>
                    {description}
                </p>
            </div>
            <div
                className={`card__button-wrapper ${isShort && isButton ? 'card__button-wrapper--short' : ''}`}>
                {isButton ?
                    <Button
                        variant='border-color'
                        title={isButton} />
                    : null}
            </div>
        </div>
    )
}

export default Card;
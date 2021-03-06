import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DimensionContext from '../context/dimensionContext'
import Button from './Button'
import chair from '../../assets/images/chair2.jpg'

const ServicesShortInfo = () => {
    const { dimension } = useContext(DimensionContext)
    const { width } = dimension

    return (
        <section className='services-short-info'>
            <div className='services-short-info__wrapper'>
                <h1 className='services-short-info__title'>Usługi</h1>
                <p className='services-short-info__description'>Oferujemy Państwu szeroki zakres usług stomatologicznych w najwyższym standardzie - w tym leczenie kanałowe (endodoncja), protetykę (licówki, protezy), szeroki wachlarz usług z zakresu kosmetyki stomatologicznej. Poniżej znajduję się bardziej szczegółowa lista.</p>
                <Link to={{ pathname: 'https://www.znanylekarz.pl/magdalena-chorazykiewicz/stomatolog/wroclaw' }} target='_blank'>
                    <Button variant='border-white' title='Kalendarz' />
                </Link>
            </div>
            {width < 640 ? null : <img className='services-short-info__image' src={chair} alt="stomatologklecina" />}
        </section>
    )
}

export default ServicesShortInfo
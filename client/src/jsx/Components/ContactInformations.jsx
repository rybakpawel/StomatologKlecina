import React from 'react'
import chair from '../../assets/images/chair.jpg'
import computer from '../../assets/icons/computer.svg'
import dentist from '../../assets/icons/dentist.svg'
import pin from '../../assets/icons/pin.svg'
import smartphone from '../../assets/icons/smartphone.svg'

const ContactInformations = () => {
    const informationsList = [
        {
            id: 1,
            icon: pin,
            title: 'Adres',
            description: 'ul. Kostrzyńska 26, 52-320 Wrocław'
        },
        {
            id: 2,
            icon: smartphone,
            title: 'Zadzwoń',
            description: '603-068-648'
        },
        {
            id: 3,
            icon: dentist,
            title: 'Stomatolog',
            description: 'Lek. Magdalena Chorążykiewicz'
        },
        {
            id: 4,
            icon: computer,
            title: 'Znany Lekarz',
            description: null
        },
    ]

    const informationsContainer = informationsList.map(info => {
        const { id, icon, title, description } = info
        return (
            <div
                className='contact-informations__icon-informations'
                key={id}>
                <div className='contact-informations__icon-informations__icon'>
                    <img
                        src={icon}
                        alt={title} />
                </div>
                <div className='contact-informations__icon-informations__informations'>
                    {description === null
                        ? <a href='https://www.znanylekarz.pl/magdalena-chorazykiewicz/stomatolog/wroclaw'>
                            <h4>{title}</h4></a>
                        : <h4>{title}</h4>}
                    <p>{description}</p>
                </div>
            </div>
        )
    })

    return (
        <section className='contact-informations'>
            <img
                className='contact-informations__image'
                src={chair}
                alt='dentist-chair' />
            <div className='contact-informations__wrapper'>
                {informationsContainer}
            </div>

        </section>
    )
}

export default ContactInformations
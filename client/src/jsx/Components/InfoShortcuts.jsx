import React from 'react'
import clock from '../../assets/icons/clock.svg'
import dentist from '../../assets/icons/dentist.svg'
import pin from '../../assets/icons/pin.svg'
import smartphone from '../../assets/icons/smartphone.svg'

const InfoShortcuts = () => {
    const informationsList = [
        {
            id: 1,
            icon: pin,
            title: 'Adres',
            description: 'ul. Kostrzyńska 26, Wrocław'
        },
        {
            id: 2,
            icon: smartphone,
            title: 'Rejestracja',
            description: '603-068-648'
        },
        {
            id: 3,
            icon: clock,
            title: 'Godziny otwarcia',
            description: 'Pon-Pt - 9:00-20:00'
        },
        {
            id: 4,
            icon: dentist,
            title: 'Stomatolog',
            description: 'Lek. Magdalena Chorążykiewicz'
        },
    ]

    const informationsContainer = informationsList.map(info => {
        const { id, icon, title, description } = info
        return (
            <div
                className='info-shortcuts__icon-informations'
                key={id}>
                <img className='info-shortcuts__icon-informations__icon'
                    src={icon}
                    alt={title}>
                </img>
                <div className='info-shortcuts__icon-informations__informations'>
                    <h4>{title}</h4>
                    <p>{description}</p>
                </div>
            </div>
        )
    })

    return (
        <section className='info-shortcuts'>
            {informationsContainer}
        </section>
    )
}

export default InfoShortcuts
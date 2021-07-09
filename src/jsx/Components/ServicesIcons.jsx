import React from 'react';
import dentalCareIcon from '../../assets/icons/dentalCare.svg'
import teethIcon from '../../assets/icons/teeth.svg'
import babyIcon from '../../assets/icons/baby.svg'
import toothPilersIcon from '../../assets/icons/tooth-pilers.svg'
import painIcon from '../../assets/icons/pain.svg'
import toothIcon from '../../assets/icons/tooth.svg'
import orthopantomogramIcon from '../../assets/icons/orthopantomogram.svg'
import magnifierIcon from '../../assets/icons/magnifier.svg'

const ServicesIcons = () => {
    const servicesList = [
        {
            id: 1,
            icon: dentalCareIcon,
            title: 'Leczenie zachowawcze zębów'
        },
        {
            id: 2,
            icon: teethIcon,
            title: 'Protetyka'
        },
        {
            id: 3,
            icon: babyIcon,
            title: 'Stomatologia dziecięca'
        },
        {
            id: 4,
            icon: toothPilersIcon,
            title: 'Chirurgia'
        },
        {
            id: 5,
            icon: painIcon,
            title: 'Periodontologia'
        },
        {
            id: 6,
            icon: toothIcon,
            title: 'Kosmetyka stomatologiczna'
        },
        {
            id: 7,
            icon: orthopantomogramIcon,
            title: 'Radiowizjografia'
        },
        {
            id: 8,
            icon: magnifierIcon,
            title: 'Wybielanie zębów'
        },
    ]

    const getServices = () => {
        const items = servicesList.map(item => {
            return (
                <div
                    className='services-icons__wrapper'
                    key={item.id}>
                    <div className='services-icons__circle'>
                        <img
                            src={item.icon}
                            alt={item.title}
                            className='services-icons__image' />
                    </div>
                    <h2 className='services-icons__title'>{item.title}</h2>
                </div>
            )
        })

        return (
            <>
                {items}
            </>
        )
    }

    return (
        <section className="services-icons">
            {getServices()}
        </section>
    )
}

export default ServicesIcons;
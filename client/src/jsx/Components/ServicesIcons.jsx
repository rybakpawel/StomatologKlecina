import React, { useEffect, useState } from 'react';
import dentalCareIcon from '../../assets/icons/dentalCare.svg'
import teethIcon from '../../assets/icons/teeth.svg'
import babyIcon from '../../assets/icons/baby.svg'
import toothPilersIcon from '../../assets/icons/tooth-pilers.svg'
import painIcon from '../../assets/icons/pain.svg'
import toothIcon from '../../assets/icons/tooth.svg'
import orthopantomogramIcon from '../../assets/icons/orthopantomogram.svg'
import magnifierIcon from '../../assets/icons/magnifier.svg'

const ServicesIcons = () => {
    const [servicesList, setServicesList] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('http://localhost:3080/services')
        const data = await response.json()
        setServicesList(data.wholeServicesList)
    }

    const icons = [
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

    const mapList = () => {
        const servicesIcons = servicesList.map(item => {
            const { id, title } = item

            const properIcon = icons.find(icon => {
                return icon.id === id
            })

            return (
                <div
                    className='services-icons__wrapper'
                    key={id}>
                    <div className='services-icons__circle'>
                        <img
                            src={properIcon.icon}
                            alt={title}
                            className='services-icons__image' />
                    </div>
                    <h2 className='services-icons__title'>{title}</h2>
                </div>
            )
        })

        return servicesIcons
    }

    return (
        <section className='services-icons'>
            {servicesList ? mapList() : null}
        </section>
    )
}

export default ServicesIcons;
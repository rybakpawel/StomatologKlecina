import React, { useEffect, useState } from 'react';
import Loader from './Loader'
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
        const response = await fetch('https://stomatolog-klecina.herokuapp.com/services')
        const data = await response.json()
        setServicesList(data.eightServicesList)
    }

    const icons = [
        {
            id: 2,
            icon: dentalCareIcon,
        },
        {
            id: 3,
            icon: teethIcon,
        },
        {
            id: 4,
            icon: babyIcon,
        },
        {
            id: 5,
            icon: toothPilersIcon,
        },
        {
            id: 6,
            icon: painIcon,
        },
        {
            id: 7,
            icon: toothIcon,
        },
        {
            id: 8,
            icon: orthopantomogramIcon,
        },
        {
            id: 9,
            icon: magnifierIcon,
        },
    ]

    const mapIconList = () => {
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
            {servicesList ? mapIconList() : <Loader />}
        </section>
    )
}

export default ServicesIcons;
import React, { useEffect, useState } from 'react'
import Card from './Card'
import Line from './Line'
import firstAid from '../../assets/icons/firstAid.svg'
import dentalCare from '../../assets/icons/dentalCare.svg'
import baby from '../../assets/icons/baby.svg'
import tooth from '../../assets/icons/tooth.svg'

const ServicesShortcuts = () => {
    const [servicesShortcutsList, setServicesShortcutsList] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('https://stomatolog-klecina.herokuapp.com/services')
        const data = await response.json()
        setServicesShortcutsList(data.servicesListWithDescriptions)
    }

    const buttonDescription = 'Pełny opis usług'
    const icons = [
        {
            id: 1,
            icon: firstAid,
        },
        {
            id: 2,
            icon: dentalCare,
        },
        {
            id: 4,
            icon: baby,
        },
        {
            id: 7,
            icon: tooth,
        },
    ]

    const mapServiceShortcutsList = () => {
        const cards = servicesShortcutsList.map(service => {
            const { title, description, id } = service

            const properIcon = icons.find(icon => {
                return icon.id === id
            })

            return (
                <Card
                    icon={properIcon.icon}
                    title={title}
                    description={description}
                    button={buttonDescription}
                    link='/services'
                    key={id}
                />
            )
        })
        return cards
    }

    return (
        <section className='servicesShortcuts'>
            <h2 className='servicesShortcuts__title'>
                Oferuję szeroki zakres usług stomatologicznych w najwyższym standardzie
                <Line center={true} />
            </h2>
            <div className='servicesShortcuts__shortcuts'>
                {servicesShortcutsList ? mapServiceShortcutsList() : null}
            </div>
        </section>
    )
}

export default ServicesShortcuts;
import React from 'react'
import Card from './Card'
import Line from './Line'
import firstAid from '../../assets/icons/firstAid.svg'
import dentalCare from '../../assets/icons/dentalCare.svg'
import baby from '../../assets/icons/baby.svg'
import tooth from '../../assets/icons/tooth.svg'

const ServicesShortcuts = () => {
    const btn = 'Pełny opis usług'
    const services = [
        {
            id: 1,
            title: 'Opieka w nagłych wypadkach',
            description: 'Nie wahaj się skontaktować w nagłych wypadkach. Pilna opieka stomatologiczna świadczona jest zwykle tego samego dnia.',
            icon: firstAid,
        },
        {
            id: 2,
            title: 'Leczenie zachowawcze zębów',
            description: 'Leczenie próchnicy, leczenie kanałowe, usuwanie starych wkładów koronowo-korzeniowych, profilaktyka zębów, usuwanie zębów.',
            icon: dentalCare,
        },
        {
            id: 3,
            title: 'Stomatologia dziecięca',
            description: 'Leczenie i usuwanie zębów mlecznych, impregnacja zębów mlecznych, lakowanie i lakierowanie zębów mlecznych i stałych, fluorkowanie zębów.',
            icon: baby,
        },
        {
            id: 4,
            title: 'Kosmetyka stomatologiczna',
            description: 'Licówki pełnoceramiczne, korony pełnoceramiczne, korekta kształtu zębów, zmiana koloru lub maskowanie przebarwień.',
            icon: tooth,
        },
    ]

    const cards = services.map(service => {
        const { icon, title, description, id } = service

        return (
            <Card
                icon={icon}
                title={title}
                description={description}
                button={btn}
                link='/services'
                key={id}
            />
        )
    })

    return (
        <section className='servicesShortcuts'>
            <h2 className='servicesShortcuts__title'>
                Oferuję szeroki zakres usług stomatologicznych w najwyższym standardzie
                <Line center={true} />
            </h2>
            <div className='servicesShortcuts__shortcuts'>
                {cards}
            </div>
        </section>
    )
}

export default ServicesShortcuts;
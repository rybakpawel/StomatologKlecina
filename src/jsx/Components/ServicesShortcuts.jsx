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
            title: 'Opieka w nagłych wypadkach',
            description: 'Nie wahaj się skontaktować w nagłych wypadkach. Pilna opieka stomatologiczna świadczona jest zwykle tego samego dnia.',
            icon: firstAid,
        },
        {
            title: 'Leczenie zachowawcze zębów',
            description: 'Leczenie próchnicy, leczenie kanałowe, usuwanie starych wkładów koronowo-korzeniowych, profilaktyka zębów, usuwanie zębów.',
            icon: dentalCare,
        },
        {
            title: 'Stomatologia dziecięca',
            description: 'Leczenie i usuwanie zębów mlecznych, impregnacja zębów mlecznych, lakowanie i lakierowanie zębów mlecznych i stałych, fluorkowanie zębów.',
            icon: baby,
        },
        {
            title: 'Kosmetyka stomatologiczna',
            description: 'Licówki pełnoceramiczne, korony pełnoceramiczne, korekta kształtu zębów, zmiana koloru lub maskowanie przebarwień.',
            icon: tooth,
        },
    ]

    return (
        <section className='servicesShortcuts'>
            <h2 className='servicesShortcuts__title'>
                Oferuję szeroki zakres usług stomatologicznych w najwyższym standardzie
                <Line center={true} />
            </h2>
            <Card icon={services[0].icon} title={services[0].title} description={services[0].description} button={btn} />
            <Card icon={services[1].icon} title={services[1].title} description={services[1].description} button={btn} />
            <Card icon={services[2].icon} title={services[2].title} description={services[2].description} button={btn} />
            <Card icon={services[3].icon} title={services[3].title} description={services[3].description} button={btn} />
        </section>
    )
}

export default ServicesShortcuts;
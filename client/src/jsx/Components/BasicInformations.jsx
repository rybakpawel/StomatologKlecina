import React from 'react'
import Card from './Card'
import dentist from '../../assets/icons/dentist.svg'
import magnifier from '../../assets/icons/magnifier.svg'
import office from '../../assets/icons/office.svg'
import tools from '../../assets/icons/tools.svg'

const BasicInformations = () => {
    const informations = [
        {
            id: 1,
            title: 'Lek. Magdalena Chorążykiewicz',
            description: 'Specjalista stomatologii zachowawczej z 20 letnim doświadczeniem',
            icon: dentist
        },
        {
            id: 2,
            title: 'Usługi',
            description: 'Oferujemy Państwu szeroki zakres usług stomatologicznych w najwyższym standardzie',
            icon: tools
        },
        {
            id: 3,
            title: 'Nowoczesny gabinet',
            description: 'Zapraszam do mojego gabinetu mieszczącego się przy ul. Kostrzyńskiej 26',
            icon: office
        },
        {
            id: 4,
            title: 'Darmowa wizyta kontrolna',
            description: 'Skorzystaj z pierwszej darmowej wizyty kontrolnej, podczas której sprawdzę stan zdrowia twojego uzębienia i zdecyduję o dalszym leczeniu',
            icon: magnifier
        },
    ]

    const cards = informations.map(service => {
        const { icon, title, description, id } = service

        return (
            <Card
                icon={icon}
                title={title}
                description={description}
                key={id}
            />
        )
    })

    return (
        <section className='basic-informations'>
            {cards}
        </section>
    )
}

export default BasicInformations;
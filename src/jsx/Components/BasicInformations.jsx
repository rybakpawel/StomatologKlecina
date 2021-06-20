import React from 'react'
import Card from './Card'
import dentist from '../../assets/icons/dentist.svg'
import magnifier from '../../assets/icons/magnifier.svg'
import office from '../../assets/icons/office.svg'
import tools from '../../assets/icons/tools.svg'

const BasicInformations = () => {
    const informations = [
        {
            title: 'Lek. Magdalena Chorążykiewicz',
            description: 'Specjalista stomatologii zachowawczej z 20 letnim doświadczeniem',
            icon: dentist
        },
        {
            title: 'Usługi',
            description: 'Oferujemy Państwu szeroki zakres usług stomatologicznych w najwyższym standardzie',
            icon: tools
        },
        {
            title: 'Nowoczesny gabinet',
            description: 'Zapraszam do mojego gabinetu mieszczącego się przy ul. Kostrzyńskiej 26',
            icon: office
        },
        {
            title: 'Darmowa wizyta kontrolna',
            description: 'Skorzystaj z pierwszej darmowej wizyty kontrolnej, podczas której sprawdzę stan zdrowia twojego uzębienia i zdecyduję o dalszym leczeniu',
            icon: magnifier
        },
    ]

    return (
        <section className='basic-informations'>
            <Card icon={informations[0].icon} title={informations[0].title} description={informations[0].description} />
            <Card icon={informations[1].icon} title={informations[1].title} description={informations[1].description} />
            <Card icon={informations[2].icon} title={informations[2].title} description={informations[2].description} />
            <Card icon={informations[3].icon} title={informations[3].title} description={informations[3].description} />
        </section>
    )
}

export default BasicInformations;
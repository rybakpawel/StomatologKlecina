import React from 'react';

const ServicesDetails = () => {
    const servicesList = [
        {
            id: 1,
            title: 'Leczenie zachowawcze zębów',
            details: [
                'Leczenie próchnicy z wypełnieniem kompozytowym lub wkładem ceramicznym',
                'Leczenie kanałowe zębów jedno i wielokorzeniowych',
                'Leczenie kanałowe trudnych przypadków',
                'Usuwanie starych wkładów koronowo-korzeniowych'
            ]
        },
        {
            id: 2,
            title: 'Protetyka',
            details: [
                'Licówki',
                'Wkłady oraz nakłady pełnoceramiczne korony i mosty porcelanowe na bazie metalu, cyrkonu, pełnoceramiczne wkłady koronowo-korzeniowe',
                'Protezy szkieletowe, na zasuwach, zatrzaskach',
                'Szynoprotezy protezy akrylowe, nylonowe, acetalowe szyny na noc dla osób zgrzytających zębami'
            ]
        },
        {
            id: 3,
            title: 'Stomatologia dziecięca',
            details: [
                'Leczenie i usuwanie zębów mlecznych',
                'Impregnacja zębów mlecznych',
                'Lakowanie i lakierowanie zębów mlecznych i stałych',
                'Fluorkowanie zębów'
            ]
        },
        {
            id: 4,
            title: 'Chirurgia',
            details: [
                'Usuwanie zębów mlecznych i stałych'
            ]
        },
        {
            id: 5,
            title: 'Periodontologia',
            details: [
                'Usuwanie kamienia i osadu',
                'Leczenie zapalenia przyzębia',
            ]
        },
        {
            id: 6,
            title: 'Kosmetyka stomatologiczna',
            details: [
                'Licówki pełnoceramiczne, korony pełnoceramiczne',
                'Zmiana koloru lub maskowanie przebarwień',
                'Korekta kształtu zębów',
                'Wybielanie zębów w gabinecie podczas jednej wizyty lub wybielanie nakładkowe tzn. nocne'
            ]
        },
    ]

    const serviceList = servicesList.map(item => {

        const { id, title, details } = item
        const serviceDetails = details.map(detail => {
            return (
                <p className='services-details__details-list__description' key={detail.length}>
                    <span className='services-details__details-list__triangle'></span>{detail}
                </p>
            )
        })

        return (
            <div
                className='services-details__wrapper'
                key={id}>
                <h2 className='services-details__title'>{title}</h2>
                <div className='services-details__details-list'>
                    {serviceDetails}
                </div>
            </div>
        )
    })

    return (
        <section className='services-details'>
            {serviceList}
        </section>
    )
}

export default ServicesDetails
import React, { useEffect, useState } from 'react';

const ServicesDetails = () => {
    const [servicesList, setServicesList] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('https://stomatolog-klecina.herokuapp.com/services')
        const data = await response.json()
        setServicesList(data.withoutDetailsServicesList)
    }

    const mapServiceList = () => {
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

        return serviceList
    }

    return (
        <section className='services-details'>
            {servicesList ? mapServiceList() : null}
        </section>
    )
}

export default ServicesDetails
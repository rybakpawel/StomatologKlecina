import React from 'react'
import Header from '../components/Header'
import ServicesShortInfo from '../components/ServicesShortInfo'

const ServicesPage = () => {
    return (
        <>
            <Header route='services' />
            <ServicesShortInfo />
        </>
    )
}

export default ServicesPage;
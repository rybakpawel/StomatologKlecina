import React from 'react'
import Header from '../components/Header'
import ServicesShortInfo from '../components/ServicesShortInfo'
import ServicesIcons from '../components/ServicesIcons'

const ServicesPage = () => {
    return (
        <>
            <Header route='services' />
            <ServicesShortInfo />
            <ServicesIcons />
        </>
    )
}

export default ServicesPage;
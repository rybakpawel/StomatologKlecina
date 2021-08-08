import React from 'react'
import Header from '../components/Header'
import ServicesShortInfo from '../components/ServicesShortInfo'
import ServicesIcons from '../components/ServicesIcons'
import ServicesDetails from '../components/ServicesDetails'
import InfoShortcuts from '../components/InfoShortcuts'
import Footer from '../components/Footer'

const ServicesPage = () => {
    return (
        <>
            <Header route='services' />
            <ServicesShortInfo />
            <ServicesIcons />
            <ServicesDetails />
            <InfoShortcuts />
            <Footer />
        </>
    )
}

export default ServicesPage;
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import BasicInformations from '../components/BasicInformations'
import Appointment from '../components/Appointment'
import AboutMe from '../components/AboutMe'
import ServicesShortcuts from '../components/ServicesShortcuts'
import Comments from '../components/Comments'
import InfoShortcuts from '../components/InfoShortcuts'
import Footer from '../components/Footer'

const HomePage = () => {
    return (
        <>
            <Header />
            <Slider />
            <BasicInformations />
            <Appointment />
            <AboutMe subtitle={true} />
            <ServicesShortcuts />
            <Comments />
            <InfoShortcuts />
            <Footer />
        </>
    )
}

export default HomePage;
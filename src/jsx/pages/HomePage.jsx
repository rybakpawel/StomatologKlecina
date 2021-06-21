import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import BasicInformations from '../components/BasicInformations'
import Appointment from '../components/Appointment'
import AboutMe from '../components/AboutMe'

const HomePage = () => {
    return (
        <>
            <Header />
            <Slider />
            <BasicInformations />
            <Appointment />
            <AboutMe subtitle={true} />
        </>
    )
}

export default HomePage;
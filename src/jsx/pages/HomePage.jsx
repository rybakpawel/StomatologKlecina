import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import BasicInformations from '../components/BasicInformations'
import Appointment from '../components/Appointment'

const HomePage = () => {
    return (
        <>
            <Header />
            <Slider />
            <BasicInformations />
            <Appointment />
        </>
    )
}

export default HomePage;
import React from 'react'
import Header from '../components/Header'
import Appointment from '../components/Appointment'
import Footer from '../components/Footer'

const ContactPage = () => {
    return (
        <>
            <Header route='contact' />
            <Appointment route='contact' />
            <Footer />
        </>
    )
}

export default ContactPage;
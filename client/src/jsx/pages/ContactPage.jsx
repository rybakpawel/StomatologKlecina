import React from 'react'
import Header from '../components/Header'
import Appointment from '../components/Appointment'
import ContactInformations from '../components/ContactInformations'
import Footer from '../components/Footer'

const ContactPage = () => {
    return (
        <>
            <Header route='contact' />
            <Appointment route='contact' />
            <ContactInformations />
            <Footer />
        </>
    )
}

export default ContactPage;
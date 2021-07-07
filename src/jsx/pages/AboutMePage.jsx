import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import InfoShortcuts from '../components/InfoShortcuts'

const AboutMePage = () => {
    return (
        <>
            <Header route='aboutme' />
            <AboutMe />
            <InfoShortcuts />
        </>
    )
}

export default AboutMePage;
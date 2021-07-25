import React from 'react'
import Header from '../components/Header'
import AboutMe from '../components/AboutMe'
import Comments from '../components/Comments'
import InfoShortcuts from '../components/InfoShortcuts'

const AboutMePage = () => {
    return (
        <>
            <Header route='aboutme' />
            <AboutMe />
            <Comments
                title={false}
                icon={false}
                line={false}
                dots={false}
                background='pink' />
            <InfoShortcuts />
        </>
    )
}

export default AboutMePage;
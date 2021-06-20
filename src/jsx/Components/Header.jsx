import React from 'react'
import logo from '../../assets/images/logo.jpg'
import Menu from './Menu'
import InfoShortcuts from './InfoShortcuts'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' className='header__logo' />
            <Menu />
            <InfoShortcuts />
        </header>
    )
}

export default Header;
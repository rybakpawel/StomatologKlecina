import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.jpg'
import Menu from './Menu'
import InfoShortcuts from './InfoShortcuts'

const Header = ({ route }) => {
    return (
        <header className='header'>
            <div className='header__wrapper'>
                <Link to='/' className='header__logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <Menu route={route} />
            </div>
            <InfoShortcuts />
        </header>
    )
}

export default Header;
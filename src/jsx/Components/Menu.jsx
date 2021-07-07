import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Menu = ({ route }) => {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Link to='/'>
                        <Button
                            variant={route === '/' ? 'full' : 'transparent'}
                            title='Strona główna' />
                    </Link>
                </li>
                <li>
                    <Link to='aboutme'>
                        <Button
                            variant={route === 'aboutme' ? 'full' : 'transparent'}
                            title='O mnie' />
                    </Link>
                </li>
                <li>
                    <Link to='services'>
                        <Button
                            variant={route === 'services' ? 'full' : 'transparent'}
                            title='Usługi' />
                    </Link>
                </li>
                <li>
                    <Link to='contact'>
                        <Button
                            variant={route === 'contact' ? 'full' : 'transparent'}
                            title='Kontakt' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
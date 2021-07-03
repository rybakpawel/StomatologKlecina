import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom'

const Menu = () => {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Link to='/'>
                        <Button
                            variant='full'
                            title='Strona główna' />
                    </Link>
                </li>
                <li>
                    <Link to='/aboutme'>
                        <Button
                            variant='transparent'
                            title='O mnie' />
                    </Link>
                </li>
                <li>
                    <Link to='/sevices'>
                        <Button
                            variant='transparent'
                            title='Usługi' />
                    </Link>
                </li>
                <li>
                    <Link to='/contact'>
                        <Button
                            variant='transparent'
                            title='Kontakt' />
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
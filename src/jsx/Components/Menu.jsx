import React from 'react'
import Button from './Button'

const Menu = () => {
    return (
        <nav>
            <ul className='menu'>
                <li>
                    <Button variant='full' title='Strona główna' />
                </li>
                <li>
                    <Button variant='transparent' title='O mnie' />
                </li>
                <li>
                    <Button variant='transparent' title='Usługi' />
                </li>
                <li>
                    <Button variant='transparent' title='Kontakt' />
                </li>
            </ul>
        </nav>
    )
}

export default Menu;
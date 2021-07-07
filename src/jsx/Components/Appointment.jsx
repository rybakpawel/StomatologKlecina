import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import pin from '../../assets/icons/pin2.svg'

const Appointment = () => {
    const whitePin = <img src={pin} alt='pin' className='appointment__pin' />

    return (
        <section className='appointment'>
            <h2 className='appointment__title'>Umów się na wizytę kontrolną</h2>
            <div>
                <Link to='/'>
                    <Button variant='border-white' title='Mój profil na Znany Lekarz' />
                    <Button variant='border-white' title={whitePin} padding={{ padding: '1rem 1.4rem' }} />
                </Link>
            </div>
        </section>
    )
}

export default Appointment;
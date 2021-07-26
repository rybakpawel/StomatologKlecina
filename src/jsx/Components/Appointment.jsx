import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import pin from '../../assets/icons/pin2.svg'

const Appointment = ({ route }) => {
    const whitePin = <img src={pin} alt='pin' className='appointment__pin' />

    const appointmentVariant = (route) => {
        switch (route) {
            case 'home':
                return (
                    <div>
                        <Link to='/'>
                            <Button variant='border-white' title='Mój profil na Znany Lekarz' />
                            <Button variant='border-white' title={whitePin} padding={{ padding: '1rem 1.4rem' }} />
                        </Link>
                    </div>
                )
            case 'contact':
                return <p className='appointment__description'>Wizyty w gabinecie są możliwe po wcześniejszym umówieniu telefonicznym lub poprzez skorzystanie z kalendarza na witrynie Znany Lekarz.</p>
            default:
                return null;
        }
    }

    return (
        <section className={`appointment appointment--${route}`}>
            <h2 className={`appointment__title appointment__title--${route}`}>Umów się na wizytę kontrolną</h2>
            {appointmentVariant(route)}
        </section>
    )
}

export default Appointment;
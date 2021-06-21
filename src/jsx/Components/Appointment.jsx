import React from 'react'
import Button from './Button'
import pin from '../../assets/icons/pin2.svg'

const Appointment = () => {
    const whitePin = <img src={pin} alt='pin' className='appointment__pin' />

    return (
        <section className='appointment'>
            <h2 className='appointment__title'>Umów się na wizytę kontrolną</h2>
            <div>
                <Button variant='border-white' title='Mój profil na Znany Lekarz' font={{ fontSize: '1.2rem' }} />
                <Button variant='border-white' title={whitePin} font={{ fontSize: '1.2rem' }} padding={{ padding: '1rem 1.4rem' }} />
            </div>
        </section>
    )
}

export default Appointment;
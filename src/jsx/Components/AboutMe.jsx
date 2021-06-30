import React from 'react'
import Line from './Line'
import dentistImage from '../../assets/images/dentist_magda.jpg'

const AboutMe = ({ subtitle }) => {
    return (
        <section className='about-me'>
            <img src={dentistImage} alt='dentist' className='about-me__image' />
            <div className='about-me__wrapper'>
                {subtitle ?
                    <h4 className='about-me__subtitle'>
                        O mnie
                        <Line />
                    </h4>
                    : null}
                <h2 className='about-me__title'>Lek. Magdalena Chorążykiewicz</h2>
                <p className='about-me__description'>Nazywam się Magdalena Chorążykiewicz i prowadzę Indywidualną Praktykę Stomatologiczną. Studia ukończyłam na Wydziale Lekarsko-Stomatologicznym Akademii Medycznej we Wrocławiu. Od niemal 20. lat zajmuję się dbaniem o zdrowie zębów swoich pacjentów. Posiadam II stopień specjalizacji w zakresie stomatologii zachowawczej. Dzięki ustawicznemu kształceniu i nowoczesnemu sprzętowi oferuję Państwu leczenie na najwyższym poziomie.</p>
            </div>

        </section>
    )
}

export default AboutMe;
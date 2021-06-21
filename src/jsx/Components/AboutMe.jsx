import React from 'react'
import dentistImage from '../../assets/images/dentist_magda.jpg'

const AboutMe = ({ subtitle }) => {
    return (
        <section className='aboutMe'>
            <img src={dentistImage} alt='dentist' className='aboutMe__image' />
            {subtitle ?
                <h4 className='aboutMe__subtitle'>
                    O mnie
                    <span className='aboutMe__subtitle__line'></span>
                </h4>
                : null}
            <h2 className='aboutMe__title'>Lek. Magdalena Chorążykiewicz</h2>
            <p className='aboutMe__description'>Nazywam się Magdalena Chorążykiewicz i prowadzę Indywidualną Praktykę Stomatologiczną. Studia ukończyłam na Wydziale Lekarsko-Stomatologicznym Akademii Medycznej we Wrocławiu. Od niemal 20. lat zajmuję się dbaniem o zdrowie zębów swoich pacjentów. Posiadam II stopień specjalizacji w zakresie stomatologii zachowawczej. Dzięki ustawicznemu kształceniu i nowoczesnemu sprzętowi oferuję Państwu leczenie na najwyższym poziomie.</p>
        </section>
    )
}

export default AboutMe;
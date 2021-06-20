import React from 'react'
import clock from '../../assets/icons/clock.svg'
import dentist from '../../assets/icons/dentist.svg'
import pin from '../../assets/icons/pin.svg'
import smartphone from '../../assets/icons/smartphone.svg'

const InfoShortcuts = () => {
    return (
        <section className='info-shortcuts'>
            <div className='info-shortcuts__icon-informations'>
                <img className='info-shortcuts__icon-informations__icon' src={pin} alt='pin'></img>
                <div className='info-shortcuts__icon-informations__informations'>
                    <h4>Adres</h4>
                    <p>ul. Kostrzyńska 26, Wrocław</p>
                </div>
            </div>

            <div className='info-shortcuts__icon-informations'>
                <img className='info-shortcuts__icon-informations__icon' src={smartphone} alt='smartphone'></img>
                <div className='info-shortcuts__icon-informations__informations'>
                    <h4>Rejestracja</h4>
                    <p>603-068-648</p>
                </div>
            </div>

            <div className='info-shortcuts__icon-informations'>
                <img className='info-shortcuts__icon-informations__icon' src={clock} alt='clock'></img>
                <div className='info-shortcuts__icon-informations__informations'>
                    <h4>Godziny otwarcia</h4>
                    <p>Pon-Pt - 9:00-20:00</p>
                </div>
            </div>

            <div className='info-shortcuts__icon-informations'>
                <img className='info-shortcuts__icon-informations__icon' src={dentist} alt='dentist'></img>
                <div className='info-shortcuts__icon-informations__informations'>
                    <h4>Stomatolog</h4>
                    <p>Lek. Magdalena Chorążykiewicz</p>
                </div>
            </div>
        </section>
    )
}

export default InfoShortcuts
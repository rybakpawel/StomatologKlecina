import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'
import Button from './Button';
import infoImage from '../../assets/images/info.jpg';

const Footer = () => {
    const [height, setHeight] = useState(0)
    const footerRef = useRef(null)

    useEffect(() => {
        if (footerRef.current) {
            setHeight(footerRef.current.clientHeight)
        }
    }, [])

    return (
        <>
            <section className='footer'
                ref={footerRef}>
                <div className='footer__card'>
                    <img className='footer__card__image'
                        src={infoImage}
                        alt='info' />
                    <p className='footer__card__description'>
                        Zapraszamy do skorzystania z najwyższej jakości usług stomatologicznych z zakresu leczenia zachowawczego (w tym leczenia kanałowego), protetyki i stomatologii kosmetycznej (m.in. licówki). Rejestracja codziennie pod numerem telefonu 603-068-648.
                    </p>
                    <Button variant='full' title='Znany lekarz' font={{ fontSize: '1.4rem' }} />
                </div>
                <div className='footer__lists-container'>
                    <div className='footer__lists-container__menu'>
                        <h4 className='footer__lists-container__title'>Menu</h4>
                        <div className='footer-line'>
                            <div className='footer-line__first-line'></div>
                            <div className='footer-line__second-line'></div>
                        </div>
                        <ul className='footer__lists-container__list'>
                            <li>
                                <Link to='/'>
                                    Strona główna
                                </Link>
                            </li>
                            <li>
                                <Link to='aboutme'>
                                    O mnie
                                </Link>
                            </li>
                            <li>
                                <Link to='services'>
                                    Usługi
                                </Link>
                            </li>
                            <li>
                                <Link to='contact'>
                                    Kontakt
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer__lists-container__opening'>
                        <h4 className='footer__lists-container__title'>Godziny otwarcia</h4>
                        <div className='footer-line'>
                            <div className='footer-line__first-line'></div>
                            <div className='footer-line__second-line'></div>
                        </div>
                        <ul className='footer__lists-container__list'>
                            <li>
                                <span>Poniedziałek</span>
                                <span>9:00 - 20:00</span>
                            </li>
                            <li>
                                <span>Wtorek</span>
                                <span>9:00 - 20:00</span>
                            </li>
                            <li>
                                <span>Środa</span>
                                <span>9:00 - 20:00</span>
                            </li>
                            <li>
                                <span>Czwartek</span>
                                <span>9:00 - 20:00</span>
                            </li>
                            <li>
                                <span>Piątek</span>
                                <span>9:00 - 20:00</span>
                            </li>
                            <li>
                                <span>Sobota</span>
                                <span>-</span>
                            </li>
                            <li>
                                <span>Niedziela</span>
                                <span>-</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <div className='footerWrapper' style={{ height: `${height}px` }}></div>
        </>
    )
}

export default Footer;
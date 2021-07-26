import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import WidthContext from '../context/widthContext'
import Button from './Button'
import dentistTransparent from '../../assets/images/dentist_transparent.png'
import chair from '../../assets/images/chair.jpg'
import dentistMagda from '../../assets/images/dentist_magda.jpg'

const Slider = () => {
    const slides = [
        {
            title: 'Zadbaj o swój zdrowy uśmiech',
            description: 'Zapraszamy do skorzystania z najwyższej jakości usług stomatologicznych z zakresu leczenia zachowawczego (w tym leczenia kanałowego), protetyki i stomatologii kosmetycznej (m.in. licówki).',
            button: 'Zobacz wszystkie usługi',
            image: dentistTransparent
        },
        {
            title: 'Darmowy przegląd',
            description: 'Skorzystaj z oferty darmowego przeglądu, podczas którego sprawdzę stan zdrowia twojego uzębienia i razem zdecydujemy o dalszym sposobie leczenia. Oczywiście jeśli będzie to konieczne :)',
            button: 'Zapisz się już teraz',
            image: chair
        },
        {
            title: 'Profesjonalna opieka',
            description: 'Skorzystaj z profesjonalnej opieki lekarza stomatologii z 20 letnim doświadczeniem. Nasz gabinet wyposażny jest w nowoczesny sprzęt dentystyczny.',
            button: 'O mnie',
            image: dentistMagda
        },
    ]

    SwiperCore.use([Pagination, Navigation]);

    const { width } = useContext(WidthContext)

    return (
        <div className='slider-wrapper'>
            <Swiper
                slidesPerView={1}
                spaceBetween={0}
                loop={true}
                pagination={{ "clickable": true }}
                navigation={true}
                className="mySwiper">

                <SwiperSlide>
                    <section className='slider'>
                        <div className='slider__text'>
                            <h1 className='slider__text__title'>{slides[0].title}</h1>
                            <p className='slider__text__description'>{slides[0].description}</p>
                            <Link to='/services'>
                                <Button variant='border-white' title={slides[0].button} />
                            </Link>
                        </div>
                        {width < 640 ? null : <img className='slider__image slider__image--bottom' src={slides[0].image} alt="stomatologklecina" />}
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slider'>
                        <div className='slider__text'>
                            <h1 className='slider__text__title'>{slides[1].title}</h1>
                            <p className='slider__text__description'>{slides[1].description}</p>
                            <Link to='/'>
                                <Button variant='border-white' title={slides[1].button} />
                            </Link>
                        </div>
                        {width < 640 ? null : <img className='slider__image' src={slides[1].image} alt="stomatologklecina" />}
                    </section>
                </SwiperSlide>
                <SwiperSlide>
                    <section className='slider'>
                        <div className='slider__text'>
                            <h1 className='slider__text__title'>{slides[2].title}</h1>
                            <p className='slider__text__description'>{slides[2].description}</p>
                            <Link to='/aboutMe'>
                                <Button variant='border-white' title={slides[2].button} />
                            </Link>
                        </div>
                        {width < 640 ? null : <img className='slider__image' src={slides[2].image} alt="stomatologklecina" />}
                    </section>
                </SwiperSlide>
            </Swiper>
            <div className='slider-wrapper__polygon'></div>
        </div>
    )
}

export default Slider
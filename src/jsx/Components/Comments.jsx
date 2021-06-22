import React from 'react';
import Line from './Line';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import emptyAvatar from '../../assets/images/empty_avatar.png'

const Comments = () => {
    const comments = [
        {
            avatar: emptyAvatar,
            comment: 'Pani Magda to profesjonalistka. Fachowe podejście do tematu bez naciągania klientów na zbędne koszty. Atmosfera super przyjazna, gabinet czysty i bardzo nowoczesny. Polecam panią Magdę!',
            name: 'Piotr'
        },
        {
            avatar: emptyAvatar,
            comment: 'Wspaniała, dokładna Pani doktor o ogromnej wiedzy. Szczegółowo, spokojnie sprawdza stan zębów pacjenta, a następnie planuje leczenie objaśniając wszystko. Podczas wizyty czuć pełen profesjonalizm i indywidualna podejście do pacjenta. Dodatkowo gabinet wyposażony jest w pomocniczy, specjalistyczny sprzęt m.in.RTG czy kamerę przez co ocena stanu zębów i dziąseł jest bardziej precyzyjna, a takie podejście tylko potwierdza fachowość. Poza tym, Pani doktor jest miłą i sympatyczną osobą. Do takich rzetelnych lekarzy naprawdę chce się przychodzić. Jeśli ktoś ceni sobie profesjonalizm to naprawdę polecam.',
            name: 'Katarzyna Krysińska'
        },
        {
            avatar: emptyAvatar,
            comment: 'Przewspaniała dentystka :) najlepsza jaka mi się w życiu mogła trafić. A dentysty boję się jak diabeł święconej wody !!! Gorąco polecam :)',
            name: 'Artur Bratuś'
        }
    ]
    SwiperCore.use([Autoplay, Pagination]);

    return (
        <>
            <section className='comments'>
                <h2 className='comments__title'>Opinie moich pacjentów</h2>
                <Line center={true} />

                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} className="mySwiper">
                    <SwiperSlide>
                        <div className='comments__wrapper'>
                            <img className='comments__avatar' src={comments[0].avatar} alt='avatar' />
                            <Line />
                            <p className='comments__comment'>{comments[0].comment}</p>
                            <h4 className='comments__name'>{comments[0].name}</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='comments__wrapper'>
                            <img className='comments__avatar' src={comments[1].avatar} alt='avatar' />
                            <Line />
                            <p className='comments__comment'>{comments[1].comment}</p>
                            <h4 className='comments__name'>{comments[1].name}</h4>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='comments__wrapper'>
                            <img className='comments__avatar' src={comments[2].avatar} alt='avatar' />
                            <Line />
                            <p className='comments__comment'>{comments[2].comment}</p>
                            <h4 className='comments__name'>{comments[2].name}</h4>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </section>
            <Line allOver={true} />
        </>
    )
}

export default Comments;
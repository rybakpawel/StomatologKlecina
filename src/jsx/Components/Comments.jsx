import React from 'react';
import Line from './Line';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import emptyAvatar from '../../assets/images/empty_avatar.png'

const Comments = ({ title, icon, line, dots, background }) => {
    const comments = [
        {
            id: 1,
            avatar: emptyAvatar,
            comment: 'Pani Magda to profesjonalistka. Fachowe podejście do tematu bez naciągania klientów na zbędne koszty. Atmosfera super przyjazna, gabinet czysty i bardzo nowoczesny. Polecam panią Magdę!',
            name: 'Piotr'
        },
        {
            id: 2,
            avatar: emptyAvatar,
            comment: 'Wspaniała, dokładna Pani doktor o ogromnej wiedzy. Szczegółowo, spokojnie sprawdza stan zębów pacjenta, a następnie planuje leczenie objaśniając wszystko. Podczas wizyty czuć pełen profesjonalizm i indywidualna podejście do pacjenta. Dodatkowo gabinet wyposażony jest w pomocniczy, specjalistyczny sprzęt m.in.RTG czy kamerę przez co ocena stanu zębów i dziąseł jest bardziej precyzyjna, a takie podejście tylko potwierdza fachowość. Poza tym, Pani doktor jest miłą i sympatyczną osobą. Do takich rzetelnych lekarzy naprawdę chce się przychodzić. Jeśli ktoś ceni sobie profesjonalizm to naprawdę polecam.',
            name: 'Katarzyna Krysińska'
        },
        {
            id: 3,
            avatar: emptyAvatar,
            comment: 'Przewspaniała dentystka :) najlepsza jaka mi się w życiu mogła trafić. A dentysty boję się jak diabeł święconej wody !!! Gorąco polecam :)',
            name: 'Artur Bratuś'
        }
    ]
    SwiperCore.use([Autoplay, Pagination]);

    const commentsList = comments.map(item => {

        const { id, avatar, comment, name } = item

        return (
            <SwiperSlide>
                <div className='comments__wrapper'
                    key={id}>

                    {icon ? <img className='comments__avatar' src={avatar} alt='avatar' /> : null}
                    {line ? <Line /> : null}
                    <p className={`comments__comment ${background === 'pink' ? 'comments__comment--pink' : ''}`}>{comment}</p>
                    <h4 className={`comments__name ${background === 'pink' ? 'comments__name--pink' : ''}`}>{name}</h4>
                </div>
            </SwiperSlide>
        )
    })

    return (
        <>
            <section className={`comments ${background === 'pink' ? 'comments--pink' : ''}`}>
                {title ?
                    <div>
                        <h2 className='comments__title'>Opinie moich pacjentów</h2>
                        <Line center={true} />
                    </div>
                    :
                    null
                }

                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        "delay": 2500,
                        "disableOnInteraction": false
                    }}
                    pagination={dots ? { "clickable": true } : false}
                    className="mySwiper">
                    {commentsList}
                </Swiper>
            </section>
            {line ? <Line allOver={true} /> : null}
        </>
    )
}

Comments.defaultProps = {
    title: true,
    icon: true,
    line: true,
    dots: true,
    background: 'white'
};

export default Comments;
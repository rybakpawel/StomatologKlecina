import React, { useEffect, useState } from 'react';
import Line from './Line';
import Loader from './Loader';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from 'swiper/core';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"
import emptyAvatar from '../../assets/images/empty_avatar.png'

const Comments = ({ title, icon, line, dots, background }) => {
    const [comments, setComments] = useState(null)

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const response = await fetch('https://stomatolog-klecina.herokuapp.com/comments')
        const data = await response.json()
        setComments(data.comments)
    }

    const avatar = emptyAvatar;

    SwiperCore.use([Autoplay, Pagination]);

    const mapCommentsList = () => {
        const commentsList = comments.map(item => {

            const { id, comment, name } = item

            return (
                <SwiperSlide key={id}>
                    <div className='comments__wrapper'>
                        {icon ? <img className='comments__avatar' src={avatar} alt='avatar' /> : null}
                        {line ? <Line /> : null}
                        <p className={`comments__comment ${background === 'pink' ? 'comments__comment--pink' : ''}`}>{comment}</p>
                        <h4 className={`comments__name ${background === 'pink' ? 'comments__name--pink' : ''}`}>{name}</h4>
                    </div>
                </SwiperSlide>
            )
        })

        return commentsList
    }

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

                {comments ?
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            "delay": 2500,
                            "disableOnInteraction": false
                        }}
                        pagination={dots ? { "clickable": true } : false}
                        className="mySwiper">
                        {mapCommentsList()}
                    </Swiper>
                    : <Loader />
                }
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
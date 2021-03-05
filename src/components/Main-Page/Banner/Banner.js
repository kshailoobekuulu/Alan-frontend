import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner_kind_of_sushi'>
                Множество видов
            </div>

            <div className='banner_main_text'>
                САМЫХ ВКУСНЫХ СУШИ
            </div>
            <div className='banner_info'>
                В нашем меню вы найдете множество видов суши.
                Мы стараемся всегда готовить быстро и вкусно.
                    Самые лучшие суши в городе Токтогул
            </div>
            <button className='banner_button'>Заказать Онлайн</button>

        </div>
    )
}

export default Banner;
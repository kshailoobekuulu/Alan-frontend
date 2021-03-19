import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <h3>
                Множество видов
            </h3>

            <h2>
                САМЫХ ВКУСНЫХ СУШИ
            </h2>
            <p>
                В нашем меню вы найдете множество видов суши.
                Мы стараемся всегда готовить быстро и вкусно.
                    Самые лучшие суши в городе Токтогул
            </p>
            <button><p className="button-text">Заказать Онлайн</p></button>
        </div>
    )
}

export default Banner;
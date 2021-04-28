import React from 'react';
import './Banner.css';
import {Link as ScrollLink} from 'react-scroll';

const Banner = () => {
    return (
        <div className='banner '>
            <div className='container'>
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
                <ScrollLink to={"our-menu"}
                            smooth={true}
                            duration={1000}>
                    <button className="button-text">Заказать Онлайн</button>
                </ScrollLink>

            </div>
        </div>
    )
}

export default Banner;
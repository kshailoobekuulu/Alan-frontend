import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
            </div>
            <div className='location'>
                <div className='logo_loc'>

                </div>
                <p className='location_inside'>
                    Токтогул
                    Бекмамат Осмонов 48
                </p>

            </div>
            <div className='contacts'>
                <div className='logo_contact'>
                    <div/>
                    <div className='text'>
                        0700-482-721
                        Пн-Вс: 8:00-24:00

                    </div>

                </div>
                <div className='social_media'>
                    <img src='icons/facebook.png' className='icons'/>
                    <img src='icons/instagram.png.png' className='icons'/>
                    <img src='icons/cib_whatsapp.png.png' className='icons'/>

                </div>


            </div>
        </div>
            )
            }
            export default Header;
import React from 'react';
import './Header.css';
import brand from '../../assets/images/brand-232x49.png';
import location from '../../assets/images/location.png';
import whatsapp from '../../assets/images/cib_whatsapp.png';
import insta from '../../assets/images/instagram.png';
import facebook from '../../assets/images/facebook.png';

import contact from '../../assets/images/phone.png';


const Header = () => {
    return (
        <header className='header'>
            <div className='logo_and_contacts_container container-header'>
                <div className="logo">
                    <a href="/">
                        <img src={brand} alt="brand"/>
                    </a>
                </div>

                <div className='location'>
                    <div className='logo_loc'>
                        <img src={location} alt="location"/>

                    </div>
                    <div className='location_inside'>
                        <address>Токтогул <br/>Бекмамат Осмонов 48</address>
                    </div>

                </div>
                <div className='contacts'>
                    <div className='logo_contact'>
                        <img src={contact} alt="contact"/>
                        </div>
                        <div className='contact_text'>
                            <a href="tel:0700482721" className='contact-text-tel'>0700-482-721</a>
                            <p>Пн-Вс:8:00-24:00</p>
                        </div>
                </div>
                    <div className='social_media'>
                        <a  href="#"> <img src={insta} alt='insta' className='inst'/></a>
                        <a  href="#"> <img src={whatsapp} alt='whats' className=' icon '/></a>
                        <a  href="#"><img src={facebook} alt='facebook' className='icon'/></a>

                    </div>
                </div>
        </header>
    )
}
export default Header;
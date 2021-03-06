import React from 'react';
import './Header.css';
import brand from '../../../assets/images/brand-232x49.png';
import location from '../../../assets/images/location.png';
import whatsapp from '../../../assets/images/cib_whatsapp.png';
import insta from '../../../assets/images/instagram.png';
import facebook from '../../../assets/images/facebook.png';
import contact from '../../../assets/images/phone.png';
import '../../../assets/fonts/lobster-v23-latin_cyrillic-regular.ttf'


const Header = () => {
    return (
        <header className='header' id={'header'}>
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
                    <div className='location_and_contact_inside'>
                        <address>Токтогул <br/>Бекмамат Осмонов 48</address>
                    </div>

                </div>
                <div className='contacts'>
                    <div className='logo_contact'>
                        <img src={contact} alt="contact"/>
                        </div>
                        <div className='location_and_contact_inside'>
                            <a href="tel:0700482721" className='contact-text-tel'>0700-482-721</a>
                            <p>Пн-Вс:8:00-24:00</p>
                        </div>
                </div>
                    <div className='social_media'>
                        <a  href="https://instagram.com/username" target = "_blank"> <img src={insta} alt='insta' className='inst'/></a>
                        <a  href="https://www.whatsapp.com/" target = "_blank"> <img src={whatsapp} alt='whats' className=' icon '/></a>
                        <a  href="https://facebook.com/username" target = "_blank"><img src={facebook} alt='facebook' className='icon'/></a>

                    </div>
                </div>
        </header>
    )
}
export default Header;
import React from 'react';
import './Footer.css';
import logo from '../../../assets/images/brand.svg';
import insta from "../../../assets/images/instagram.png";
import whatsapp from "../../../assets/images/cib_whatsapp.png";
import facebook from "../../../assets/images/facebook.png";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="footer-top">
                    <div className="footer-contacts-item">
                        <div className="footer-conracts-text">Phone</div>
                        <a href="tel:0700482721" className="footer-contacts-value">0700-482-721</a>
                    </div>
                    <div className="footer-contacts-item">
                        <div className="footer-conracts-text">Address</div>
                        <address className="footer-contacts-value">Токтогул, Бекмамат Осмонов 48</address>
                    </div>
                    <div className='footer-contacts-item'>
                            <a  href="#"> <img src={insta} alt='insta' className='inst'/></a>
                            <a  href="#"> <img src={whatsapp} alt='whats' className=' icon '/></a>
                            <a  href="#"><img src={facebook} alt='facebook' className='icon'/></a>


                    </div>
                </div>

                <div className="footer-bottom">
                <a className="logo">
                    <img src={logo} alt="Alan"/>
                </a>
                <small className="copyright">&copy;&nbsp;2020@webovio. All Rights Reserved.</small>
            </div>
            </div>
        </div>
    )
}
export default Footer;
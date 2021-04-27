import React from 'react';
import './Footer.css';
import logo from '../../../assets/images/brand.svg';
import insta from "../../../assets/images/instagram.png";
import whatsapp from "../../../assets/images/cib_whatsapp.png";
import facebook from "../../../assets/images/facebook.png";
import phone from '../../../assets/images/phone-48.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className="footer-top">

                    <a className="footer-item foo-logo">
                        <img src={logo} alt="Alan"/>
                    </a>
                    <div className= 'footer-item'>
                        <h2>Follow Us</h2>
                        <a  href="https://instagram.com/username" target = "_blank"> <img src={insta} alt='insta' className='inst foo-icon'/></a>
                        <a  href="https://www.whatsapp.com/" target = "_blank"> <img src={whatsapp} alt='whats' className=' icon foo-icon '/></a>
                        <a  href="https://facebook.com/username" target = "_blank"><img src={facebook} alt='facebook' className='icon foo-icon'/></a>
                    </div>
                    <div className= 'footer-item'>
                        <h2>Contact Us</h2>
                        <a href="tel:0700482721" className="footer-contacts-value">
                            <img src={phone} alt='call' className= 'foo-icon'/>
                            <span>0700-482-721</span></a>


                    </div>

                </div>

                <div className="footer-bottom">

                <small className="copyright">&copy;&nbsp;Food Delivery@2021 Privacy Policy</small>
            </div>
            </div>
        </div>
    )
}
export default Footer;
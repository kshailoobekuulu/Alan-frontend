import React from "react";
import './Menu.css';
import cart from '../../../assets/images/cart.png';
const Menu = () => {
    return (
    <div className='menu'>
        <ul className= 'navigation'>
            <li className='nav_item_home'><a href = "#" >Домой</a></li>
            <li className='nav_item_menu'><a href="#">Меню</a></li>
            <li className='nav_item_contact'> <a href="#">Контакты</a></li>
            <li className='nav_item_about'><a href="#"> O нас</a> </li>
        </ul>
        <div className='cart-container'>
            <a href="#" className='cart'>
                <img src = {cart} alt = "cart"/>
            </a>
            <p className='cart-count'>(2)</p>
        </div>
    </div>
    )
}
export default Menu;

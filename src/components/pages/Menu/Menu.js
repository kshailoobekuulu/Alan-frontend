import React, {useEffect, useState} from "react";
import './Menu.css';
import { NavLink} from "react-router-dom";
import cart from '../../../assets/images/cart.png';
import {connect} from "react-redux";
import {Link as ScrollLink} from 'react-scroll';
const Menu = ({numItems}) => {

    return (
    <div className='menu'>
        <ul className= 'navigation'>
            <li className='nav_item_home'>
                <NavLink to = "/" className ='nav_item_link' >Главная</NavLink>
            </li>
            <li className='nav_item_menu'>
                <NavLink to = "/products" className = 'nav_item_link'>Все продукты</NavLink>
            </li>

            <li className='nav_item_cart'>
                <NavLink to = "/cart" className = 'nav_item_link'>Корзина</NavLink>
            </li>

            <li className='nav_item_about'>
                <NavLink to="/about" className ='nav_item_link'> O нас</NavLink>
            </li>
        </ul>
        <div className='cart-container'>
            <NavLink to="/cart" className='cart'>
                <img src = {cart} alt = "cart"/>
            </NavLink>
            <span className='cart-count'>({numItems ? numItems : '0'})</span>
        </div>
    </div>
    )
}

const mapStateToProps = ( { shoppingCart: {sum}}) => {
    return {
        numItems: sum
    }
}
export default connect(mapStateToProps)(Menu);

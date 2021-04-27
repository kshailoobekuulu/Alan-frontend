import React from "react";
import './Menu.css';
import { NavLink} from "react-router-dom";
import cart from '../../../assets/images/cart.png';
import {connect} from "react-redux";

const Menu = ({numItems}) => {
    return (
    <div className='menu'>
        <ul className= 'navigation'>
            <li className='nav_item_home'><NavLink to = "/" className ='nav_item_link' >Домой</NavLink></li>
            <li className='nav_item_menu'><NavLink to = "/menu" className = 'nav_item_link'>Меню</NavLink></li>
            <li className='nav_item_contact'> <NavLink to="/contact" className ='nav_item_link'>Контакты</NavLink></li>
            <li className='nav_item_about'><NavLink to="/about" className ='nav_item_link'> O нас</NavLink> </li>
        </ul>
        <div className='cart-container'>
            <NavLink to="/cart" className='cart'>
                <img src = {cart} alt = "cart"/>
            </NavLink>
            <span className='cart-count'>({numItems})</span>
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
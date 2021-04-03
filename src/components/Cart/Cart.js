import React from "react";
import './Cart.css';
import food from '../../assets/images/shop-cart.png';
import food2 from '../../assets/images/shop-cart-2.png';
import deleteIcon from '../../assets/images/cancel.svg';
import add from '../../assets/images/plus.svg';
import minus from '../../assets/images/remove.svg';
import cart2 from '../../assets/images/cart-70-32.png';


const Cart = () => {
    return (
        <div className= 'cart-main'>
            <div className='cart-page-container'>
            <h2 className= "cart-header">2 товара в вашей корзине: </h2>
            <ul className='cart-items'>
                <li className='cart-count'>
                    <a href="#"><img src = {add} className='count-icon'/></a>
                    <p className='count-text'>1</p>
                    <a  href="#"><img src = {minus} className='count-icon'/></a>
                </li>
                <li className='foods-image'> <img src={food} alt = 'food'/></li>
                <li className='food-name'>
                    <span>Fruits</span>
                    <p>Fruit Mix Basket</p>
                </li>
                <li className='foods-price'>$34</li>
                <li className='delete-from-cart'>
                    <a href="#"><img src = {deleteIcon} alt = "delete" className="cancel_icon"/></a>
                </li>
            </ul>
                <ul className='cart-items'>
                    <li className='cart-count'>
                        <a href="#"><img src = {add} className='count-icon'/></a>
                        <p className='count-text'>1</p>
                        <a  href="#"><img src = {minus} className='count-icon'/></a>
                    </li>
                    <li className='foods-image'> <img src={food2} alt = 'food'/></li>
                    <li className='food-name'>
                        <span>Fruits</span>
                        <p>Fruit Mix Basket</p>

                    </li>
                    <li className='foods-price'>$34</li>
                    <li className='delete-from-cart'>
                        <a href="#"><img src = {deleteIcon} alt = "delete" className="cancel_icon"/></a>
                    </li>
                </ul>
                <div className='cart-footer'>
                    <div className='total'>
                        <span className='total-text'>Total:</span>
                        <p className='total-price'>$130</p>
                    </div>

                    <div className='cart-button'>
                        <button className='cart-button-b'>
                            <img src= {cart2} alt='cart2'/>
                            <span className='cart-button-text'>Proceed to checkout </span>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Cart;

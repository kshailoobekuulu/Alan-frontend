import React from "react";
import './Cart.css';
import food from '../../assets/images/shop-cart.png';
import food2 from '../../assets/images/shop-cart-2.png';
import deleteIcon from '../../assets/images/cancel.svg';
import add from '../../assets/images/plus.svg';
import minus from '../../assets/images/remove.svg';
import cart2 from '../../assets/images/cart-70-32.png';


class Cart extends React.Component {
    state = {
        count1: 1,
        count2: 1
    };
    increaseCount = () => {
        this.setState({count1: this.state.count1 + 1});
    }
    increaseCount1 = () => {
        this.setState({count2: this.state.count2 + 1});
    }
    decreaseCount = () => {
        if( this.state.count > 1) {
        this.setState({count1: this.state.count1 - 1});
        } else {
            this.setState({count1: 1});
        }
    }
    decreaseCount1 = () => {
        if( this.state.count > 1) {
            this.setState({count2: this.state.count2 - 1});
        } else {
            this.setState({count2: 1});
        }
    }

    render() {
        return (
            <div className='cart-main'>
                <div className='cart-page-container'>
                    <h2 className="cart-header">2 товара в вашей корзине: </h2>
                    <ul className='cart-items'>
                        <li className='cart-count'>
                            <button
                                className= 'increase-decrease-button'
                                onClick= {this.increaseCount}>
                                <img src={add} className='count-icon'/>
                            </button>
                            <p className='count-text'>{this.state.count1}</p>
                            <button
                                className= 'increase-decrease-button'
                                onClick= { this.decreaseCount }>
                                <img src={minus} className='count-icon'/>
                            </button>
                        </li>
                        <li className='foods-image'><img src={food} alt='food'/></li>
                        <li className='food-name'>
                            <span>Fruits</span>
                            <p>Fruit Mix Basket</p>
                        </li>
                        <li className='foods-price'>$34</li>
                        <li className='delete-from-cart'>
                            <a href="#"><img src={deleteIcon} alt="delete" className="cancel_icon"/></a>
                        </li>
                    </ul>
                    <ul className='cart-items'>
                        <li className='cart-count'>
                            <button
                                className= 'increase-decrease-button'
                                onClick= {this.increaseCount1}>
                                <img src={add} className='count-icon'/>
                            </button>
                            <p className='count-text'>{this.state.count2}</p>
                            <button
                                className= 'increase-decrease-button'
                                onClick= { this.decreaseCount1 }>
                                <img src={minus} className='count-icon'/>
                            </button>
                        </li>
                        <li className='foods-image'><img src={food2} alt='food'/></li>
                        <li className='food-name'>
                            <span>Fruits</span>
                            <p>Fruit Mix Basket</p>
                        </li>
                        <li className='foods-price'>$34</li>
                        <li className='delete-from-cart'>
                            <a href="#"><img src={deleteIcon} alt="delete" className="cancel_icon"/></a>
                        </li>
                    </ul>
                    <div className='cart-footer'>
                        <div className='total'>
                            <span className='total-text'>Total:</span>
                            <p className='total-price'>$130</p>
                        </div>

                        <div className='cart-button'>
                            <button className='cart-button-b'>
                                <img src={cart2} alt='cart2' className = "cart-icon"/>
                                <span className='cart-button-text'>Proceed to checkout </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Cart;

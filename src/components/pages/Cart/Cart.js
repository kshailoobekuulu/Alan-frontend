import React from "react";
import './Cart.css';
import food from '../../../assets/images/shop-cart.png';
import food2 from '../../../assets/images/shop-cart-2.png';
import deleteIcon from '../../../assets/images/cancel.svg';
import add from '../../../assets/images/plus.svg';
import minus from '../../../assets/images/remove.svg';
import cart2 from '../../../assets/images/cart-70-32.png';
import {connect} from "react-redux";
import {foodAddedToCart, foodDecreaseInCart, foodDeleteInCart, foodIncreaseInCart} from "../../../actions";


const Cart = ({items, total,numItems, onIncrease, onDecrease, onDelete}) => {
    const renderRow = (item, idx) => {
        const {id, name, count, total} = item;
        return (
            <ul className='cart-items'>
                <li className='cart-count'>
                    <button
                        className='increase-decrease-button'
                        onClick={() => onIncrease(id)}>
                        <img src={add} className='count-icon'/>
                    </button>
                    <p className='count-text'>{count}</p>
                    <button
                        className='increase-decrease-button'
                        onClick={() => onDecrease(id)}>
                        <img src={minus} className='count-icon'/>
                    </button>
                </li>
                <li className='foods-image'><img src={food} alt='food'/></li>
                <li className='food-name'>
                    <span>Fruits</span>
                    <p>{name}</p>
                </li>
                <li className='foods-price'>${total}</li>
                <li className='delete-from-cart'>
                    <button
                        className='cancel_button'
                        onClick={() => onDelete(id)}
                    ><img src={deleteIcon} alt="delete" className="cancel_icon"/></button>
                </li>
            </ul>

        )
    };
    return (
        <div className='cart-main'>
            <div className='cart-page-container'>
                <h2 className="cart-header">{numItems} товаров в вашей корзине: </h2>
                <div className='cart-footer'>

                    {
                        items.map(renderRow)
                    }
                    <div className='total'>
                        <span className='total-text'>Total:</span>
                        <p className='total-price'>{total} сом</p>
                    </div>
                    <div className='cart-button'>
                        <button className='cart-button-b'>
                            <img src={cart2} alt='cart2' className="cart-icon"/>
                            <span className='cart-button-text'>Proceed to checkout </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )

}
const mapStateToProps = ( { shoppingCart: {cartItems, orderTotal, sum}}) => {
    return {
        items: cartItems,
        total: orderTotal,
        numItems: sum

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrease: (id) => { dispatch(foodIncreaseInCart(id))},
        onDecrease: (id) => { dispatch(foodDecreaseInCart(id))},
        onDelete: (id) => { dispatch(foodDeleteInCart(id))}
    }


}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);


// state = {
//     count: 1,
//     count2: 1,
//     total : 0
// };
// onIncreaseCount = (id) => {
//     // this.setState({count1: this.state.count1 + 1});
//     const action = increaseCountActionCreator(id);
//     this.props.dispatch(action);
//
// }
// OnDecreaseCount = () => {
//     this.setState({count1: this.state.count1 - 1});
//     if (this.state.count1 < 2) {
//         this.setState({count1: 1});
//     }
// }
// deleteProduct = (id) => {
//     const action = removeProductActionCreator(id);
//     this.props.dispatch(action);
// }

// calculateTotalPrice = (price) =>{
//     this.setState({total: this.state.total + price});
//
// }


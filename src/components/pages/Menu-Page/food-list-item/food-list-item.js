import React from "react";
import '../menu-page.css';
import '../../Cart/Cart.css';
import placeholder from '../../../../assets/images/placeholder.jpg'

const FoodListItem = ({food, onAddedToCart}) => {
    const {name, price, photo} = food;

    return (

        <div className='cart-items'>
            <div>
                {photo !== undefined ?
                              <img className='foods-image' src={photo} alt='food'/> : <img src={placeholder} alt='food'/> }
            </div>

            <div className='food-name'>
                <span>Fruits</span><br/>
                <p>{name}</p>
            </div>

            <div className='foods-price'>{price} сом</div>

            <div>
                <button onClick={onAddedToCart} className="add-to-cart-button">
                    <div className="add-to-card-icon"></div>
                </button>
            </div>
        </div>

    )

}

export default FoodListItem;

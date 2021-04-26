import React from "react";
import foodImg from "../../../../assets/images/shop-cart.png";
import addToCard from "../../../../assets/images/shopping-cart-48.png";
import '../menu-page.css';

const FoodListItem = ({food, onAddedToCart}) => {
    const {name, price} = food;
    return (
        <ul className='menu-items'>

            <li className='menu-foods-image'><img src={foodImg} alt='food'/></li>
            <li className='menu-foods-name'>
                <span>Fruits</span><br/>
                <p>{name}</p>
            </li>
            <li className='menu-foods-price'>{price} сом</li>
            <li className='menu-add-to-cart'>
                <button
                    onClick={onAddedToCart}
                    className="add-to-cart-button">
                    <img src={addToCard} alt="delete" className="add-to-card-icon"/>
                </button>
            </li>
        </ul>

    )

}

export default FoodListItem;

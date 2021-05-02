import React from "react";
import addToCard from "../../../../assets/images/shopping-cart-48.png";
import '../menu-page.css';
import placeholder from '../../../../assets/images/placeholder.jpg'

const FoodListItem = ({food, onAddedToCart}) => {
    const {name, price, photo} = food;
    // console.log("rfefe", photo);

    return (

        <div className='menu-items'>
            <div className='menu-foods-image'>
                {photo !== undefined ?
                              <img src={photo} alt='food'/> : <img src={placeholder} alt='food'/> }
            </div>

            <div className='menu-foods-name'>
                <span>Fruits</span><br/>
                <p>{name}</p>
            </div>

            <div className='menu-foods-price'>{price} сом</div>

            <div>
                <button onClick={onAddedToCart} className="add-to-cart-button">
                    <div className="add-to-card-icon"></div>
                </button>
            </div>
        </div>
        // <ul className='menu-items'>
        //
        //     <li className='menu-foods-image'>
        //         {photo !== undefined ?
        //             <img src={photo} alt='food'/> : <img src={placeholder} alt='food'/> }
        //     </li>
        //     <li className='menu-foods-name'>
        //         <span>Fruits</span><br/>
        //         <p>{name}</p>
        //     </li>
        //     <li className='menu-foods-price'>{price} сом</li>
        //     <li className='menu-add-to-cart'>
        //         <button
        //             onClick={onAddedToCart}
        //             className="add-to-cart-button">
        //             <div className="add-to-card-icon">
        //             </div>
        //         </button>
        //     </li>
        // </ul>

    )

}

export default FoodListItem;

import React from "react";
import './Menu-Page.css';
import food from '../../assets/images/shop-cart.png';
import food2 from '../../assets/images/shop-cart-2.png';
import addToCard from '../../assets/images/shopping-cart-48.png';

const MenuPage = () => {
    return (
        <div className='main-menu'>
            <div className='menu-page-container'>
                <h2 className="menus-header">Наше меню: </h2>
                <ul className='menu-items'>
                    <li className='menu-foods-image'><img src={food} alt='food'/></li>
                    <li className='menu-foods-name'>
                        <span>Fruits</span><br/>
                        <p>Fruit Mix Basket</p>
                    </li>
                    <li className='menu-foods-price'>$34</li>
                    <li className='menu-add-to-cart'>
                        <a href="#"><img src={addToCard} alt="delete" className="add-to-card-icon"/></a>
                    </li>
                </ul>
                <ul className='menu-items'>
                    <li className='menu-foods-image'><img src={food2} alt='food'/></li>
                    <li className='menu-foods-name'>
                        <span>Fruits</span><br/>
                        <p>Fruit Mix Basket</p>
                    </li>
                    <li className='menu-foods-price'>$34</li>
                    <li className='menu-add-to-cart'>
                        <a href="#"><img src={addToCard} alt="delete" className="add-to-card-icon"/></a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default MenuPage;

import React from "react";
import '../menu-page.css';
import FoodListItem from "../food-list-item/food-list-item";

const FoodList =(props) => {
    const {foods, onAddedToCart} = props;
        return ( <ul>
                        {
                            foods.map((food) => {
                                return (
                                    <li key={food.id}>
                                        <FoodListItem
                                            food={food}
                                            onAddedToCart = {() =>onAddedToCart(food.id)}
                                    /></li>
                                )
                            })
                        }
                    </ul>
                       );

}

export default FoodList;




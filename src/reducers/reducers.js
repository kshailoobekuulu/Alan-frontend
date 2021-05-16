import updateFoodList from "./food-list";
import updateShoppingCart from "./shoping-cart";
import welcomeReducer from "./welcome-reducer";
import categoriesReducer from "./categories-reducer";
// import {getCategoryByUrlReducer} from "./categoryByUrl-reducer";
import getCategoryByUrlReducer from "./categoryByUrl-reducer";

const reducer = (state, action) => {
    console.log(state, action);

    return {
        categoryByUrl: getCategoryByUrlReducer(state, action),
        foodList: updateFoodList(state,action),
        shoppingCart: updateShoppingCart(state, action),
        welcomeTexts: welcomeReducer(state, action),
        categoryList: categoriesReducer(state, action),

    }
}
export default reducer;

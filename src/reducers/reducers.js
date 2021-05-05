import updateFoodList from "./food-list";
import updateShoppingCart from "./shoping-cart";
import welcomeReducer from "./welcome-reducer";
import categoriesReducer from "./categories-reducer";

const reducer = (state, action) => {
    // console.log(action.type);

    return {
        foodList: updateFoodList(state,action),
        shoppingCart: updateShoppingCart(state, action),
        welcomeTexts: welcomeReducer(state, action),
        categoryList: categoriesReducer(state, action)
    }
}
export default reducer;

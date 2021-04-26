import updateFoodList from "./food-list";
import updateShoppingCart from "./shoping-cart";

const reducer = (state, action) => {
    // console.log(action.type);

    return {
        foodList: updateFoodList(state,action),
        shoppingCart: updateShoppingCart(state, action)
    }
}
export default reducer;

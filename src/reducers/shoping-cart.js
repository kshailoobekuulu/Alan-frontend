let ordTotal = 0;
let totalOrder = 0;
let addedToCart = false;

const updateCartItems = (cartItems, item, idx) => {
    if(item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx+1)
        ]
    };

    if(idx === -1) {
        return [
            ...cartItems,
            item
        ]
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx+1)
    ]
}

const updateCartItem = (food, item = {}, quantity) => {
    const t = 0, c = 0;
    ordTotal += t + quantity*food.price;
    totalOrder += c + quantity;

    const {
        id = food.id,
        count =  0,
        name =  food.name,
        photo = food.photo,
        total =  0 } = item;
    return {
        id,
        name,
        photo,
        count: count+ quantity,
        total: total + quantity*food.price
    }
}
const updateOrder = (state, foodId, quantity) => {

    const { foodList: {foods}, shoppingCart: {cartItems}} = state;

    cartItems.map((findId) => {
         if(findId.id === foodId) {
             addedToCart = true;
             console.log(foodId);
         }

    })
    const food = foods.find(food => food.id === foodId);
    const itemIndex = cartItems.findIndex(({id}) => id === foodId);

    const item = cartItems[itemIndex];
    const newItem = updateCartItem(food, item, quantity);



    if(addedToCart) {
        return {
            orderTotal: ordTotal,
            sum: totalOrder,
            cartItems: [...cartItems]
        }
    } else {
        return {
            orderTotal: ordTotal,
            sum: totalOrder,
            cartItems: updateCartItems(cartItems, newItem, itemIndex)
        }

    }


}

const updateShoppingCart = (state, action) => {
    if(state === undefined) {
        return {
            cartItems: [],
            orderTotal: 0
        }
    }

    switch (action.type) {

        case 'FOOD_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);
        case 'FOOD_INCREASE_IN_CART':
            return updateOrder(state, action.payload, 1);
        case 'FOOD_DECREASE_IN_CART':
            return updateOrder(state, action.payload, -1);
        case 'FOOD_DELETE_IN_CART':
            const food = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
            return updateOrder(state, action.payload, -food.count);
        default:
            return  state.shoppingCart
    }

}

export default updateShoppingCart;
let ordTotal = 0;
let totalOrder = 0;

// const addToCart = (state, foodId) => {
//
//     const { foodList: {foods}, shoppingCart: {cartItems}} = state;
//
//     const food = foods.find(food => food.id === foodId);
//     // const item = cartItems[itemIndex];
//     const t = 0, c = 0;
//     const itemIndex = cartItems.findIndex(({id}) => id === foodId);
//     console.log(itemIndex);
//     ordTotal += t + food.price;
//     totalOrder += c + 1;
//
//
//     const newItem = {
//         id: food.id,
//         name: food.name,
//         count: food.count,
//         total: food.price};
//
//     if(itemIndex === -1) {
//         return {
//             orderTotal: ordTotal,
//             sum: totalOrder,
//             cartItems: [
//                 ...cartItems,
//                 newItem
//             ]
//         };
//
//     }
//     else {
//         return state;
//
//
//
//     }
// }

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
        total =  0 } = item;
    return {
        id,
        name,
        count: count+ quantity,
        total: total + quantity*food.price
    }
}
const updateOrder = (state, foodId, quantity) => {
    const { foodList: {foods}, shoppingCart: {cartItems}} = state;

    const food = foods.find(food => food.id === foodId);
    const itemIndex = cartItems.findIndex(({id}) => id === foodId);
    const item = cartItems[itemIndex];
    const newItem = updateCartItem(food, item, quantity);

    return {
        orderTotal: ordTotal,
        sum: totalOrder,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
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
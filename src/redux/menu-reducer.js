const ADD_TO_CART = 'ADD_TO_CART';

let initialState = {
    menu: [
        {id: 1, name: "Sushi", price: 40},
        {id: 2, name: "Burger", price: 80},
    ]
};

 export const menuReducer = (state = initialState, action) => {
     switch (action.type) {
         case ADD_TO_CART:
             // state.products = state.products.filter(item => item.id !== action.id);
             return state;

         default:
             return state;
     }
}
export const addToCartActionCreator = (id) => {
    return {
        type: ADD_TO_CART, id: id
    }
}

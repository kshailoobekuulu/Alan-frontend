const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const INCREASE_PRODUCT_COUNT = 'INCREASE_PRODUCT_COUNT';

let initialState = {
    products : [
        {id: 1, name: "Fruit Mix Basket", price: 34, quantity: 1},
        {id: 2, name: "Lagman", price: 44, quantity: 2},
        {id: 3, name: "Plov", price: 100, quantity: 3}
    ]
};

 export const cartReducer = (state = initialState, action) => {
     switch (action.type) {
         case REMOVE_PRODUCT:
             state.products = state.products.filter(item => item.id !== action.id);
             return state;

         case INCREASE_PRODUCT_COUNT:
             debugger;
             const productIndex = state.products.findIndex(item => item.id === action.id);
             const newPr =  state.products[0];
             const newQuantity = newProduct.quantity+1;
             const newProduct = { name: newPr.name, id: action.id, price: newPr.price, quantity: newQuantity};
             ;
             return [
                 ...state.products.slice(0, productIndex),
                 newProduct,
                 ...state.products.slice(productIndex + 1)
             ];
         default:
             return state;
     }
}
export const removeProductActionCreator = (id) => {
    return {
        type: REMOVE_PRODUCT, id: id
    }
}
export const increaseCountActionCreator = (id) => {
    return {type: INCREASE_PRODUCT_COUNT, id: id};
}
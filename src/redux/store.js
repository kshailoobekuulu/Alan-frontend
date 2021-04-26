import {cartReducer} from "./cart-reducer";
let store = {
    _state: {
        cartPage: {
            products: [
                {id: 1, name: "Fruit Mix Basket", price: 34, count: 1},
                {id: 2, name: "Lagman", price: 44, count: 2},
                {id: 3, name: "Plov", price: 100, count: 3}
            ]
        }
    },
    getState() {
        return this._state;
    },
    _rerenderEntireTree() {
        console.log("Subscribe");
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer;
    },
    dispatch(action) {
        cartReducer(this.getState().cartPage, action);
        cartReducer(this.getState().cartPage, action)
        this._rerenderEntireTree(this._state);
    }


}


// let total = 0;
// state.cartPage.products.map((product) => (
//     total = total+product.count*product.price
// ))


// console.log(total);
export default store;
window.store = store;
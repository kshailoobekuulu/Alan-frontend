
export default class FoodsService {
     data =  [
        {id: 1, name: "Lagman", price: 34},
        {id: 2, name: "Manti", price: 65},
         {id: 3, name: "Ashlan-Fu", price: 110},
         {id: 4, name: "Beshbarmak", price: 250},
     ]
    getFoods() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 200 );
        });
    }

}
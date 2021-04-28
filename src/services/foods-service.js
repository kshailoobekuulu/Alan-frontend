
export default class FoodsService {
      data =  [
        {id: 1, name: "Lagman", price: 34},
        {id: 2, name: "Manti", price: 65},
         {id: 3, name: "Ashlan-Fu", price: 110},
         {id: 4, name: "Beshbarmak", price: 250},
     ]
    getFoods() {
         fetch('http://127.0.0.1:8000/api/products')
             .then((res) => {
                 return res.json();
             })
             .then((body) => {
                this.data = body.data;
             })

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(this.data)
            }, 200 );
        });

    }

}
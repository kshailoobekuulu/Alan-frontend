import axios from 'axios';
export default class FoodsService {
      data = []

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
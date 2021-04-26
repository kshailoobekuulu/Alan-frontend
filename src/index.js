// import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
import './index.css';
import { Provider} from "react-redux";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import { FoodsServiceProvider } from './components/foods-service-context';
import store from './store';
import FoodsService from "./services/foods-service";
const foodsService = new FoodsService();
// console.log(foodsService.getFoods());
// export const rerenderEntireTree = (state) => {
    ReactDOM.render(
        <Provider store={ store }>
                  <ErrorBoundry>
                      <FoodsServiceProvider value={foodsService}>
                          <App
                              // state = {store.getState()}
                              // dispatch = {store.dispatch.bind(store)}
                          />
                      </FoodsServiceProvider>
                  </ErrorBoundry>
        </Provider>
        ,
        document.getElementById('root')
    );
// }


// rerenderEntireTree(store.getState());
// store.subscribe(() => {
//     rerenderEntireTree(store.getState());
// });

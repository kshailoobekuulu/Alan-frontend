import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import App from './App';
import './index.css';
import { Provider} from "react-redux";
import {createStore, applyMiddleware} from 'redux';
import thunk from "redux-thunk"
import reducers from "./reducers/reducers";

import ErrorBoundry from "./components/error-boundry/error-boundry";
import { FoodsServiceProvider } from './components/foods-service-context';
// import store from './store';
import FoodsService from "./services/foods-service";
const foodsService = new FoodsService();

const store = createStore(reducers, applyMiddleware(thunk))

    ReactDOM.render(
        <Provider store={ store }>
                  <ErrorBoundry>
                      <FoodsServiceProvider value={foodsService}>
                          <App/>
                       </FoodsServiceProvider>
                  </ErrorBoundry>
        </Provider>
        ,
        document.getElementById('root')
    );



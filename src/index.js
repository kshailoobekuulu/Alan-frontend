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



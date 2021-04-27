
import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from "./components/pages/Header/Header";
import Menu from "./components/pages/Menu/Menu";

import './App.css';
import Footer from "./components/pages/Footer/Footer";
import MainPage from "./components/pages/MainPage/Main-Page";
import Cart from "./components/pages/Cart/Cart";
import FoodList from "./components/pages/Menu-Page/menu-page";
import OurMenu from "./components/pages/MainPage/OurMenu/OurMenu";
import { withFoodsService} from './components/hoc';

const App = ({foodsService}) => {

    console.log(foodsService.getFoods());

    // const state = props.state;

    return (
        <BrowserRouter>
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path='/' render = { () => <MainPage/>}/>
                    <Route exact path='/sub-menu' render = { () => <FoodList />}/>
                    <Route exact path='/cart' render = { () => <Cart />}/>
                    <Route exact path='/menu' render={ () => <OurMenu/>}/>
                </Switch>
                <Footer/>
        </BrowserRouter>
    );

}

export default withFoodsService()(App);

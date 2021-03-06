
import React from "react";
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Header from "./components/pages/Header/Header";
import Menu from "./components/pages/Menu/Menu";

import './App.css';
import Footer from "./components/pages/Footer/Footer";
import MainPage from "./components/pages/MainPage/Main-Page";
import Cart from "./components/pages/Cart/Cart";
import FoodList from "./components/pages/Menu-Page/menu-page";
import OurMenu from "./components/pages/MainPage/OurMenu/OurMenuApiComponent";
import { withFoodsService} from './components/hoc';
import AboutUs from "./components/pages/about_us/about_us";
import CategoryPage from "./components/pages/category-page/categoryPageContainer";
import CategoryPageContainer from "./components/pages/category-page/categoryPageContainer";

const App = ({foodsService}) => {

    console.log(foodsService.getFoods());

    // const state = props.state;

    return (
        <BrowserRouter>
                <Header/>
                <Menu/>
                <Switch>
                    <Route exact path='/' render = { () => <MainPage/>}/>
                    <Route exact path='/products' render = { () => <FoodList />}/>
                    <Route exact path='/products/:id' render = { () => <CategoryPageContainer />}/>
                    <Route exact path='/cart' render = { () => <Cart />}/>
                    <Route exact path='/menu' render={ () => <OurMenu/>}/>
                    <Route exact path='/about' render={ () => <AboutUs/>}/>
                </Switch>
                <Footer/>
        </BrowserRouter>
    );

}

export default withFoodsService()(App);

import React from "react";
import {Route, BrowserRouter} from 'react-router-dom';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import './App.css';
import Footer from "./components/Footer/Footer";
import MainPage from "./components/MainPage/Main-Page";
import Cart from "./components/Cart/Cart";
import MenuPage from "./components/Menu-Page/Menu-Page";

function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Menu/>
                <Route exact path='/' render = { () => <MainPage/>}/>
                <Route exact path='/menu' render = { () => <MenuPage/>}/>
                <Route exact path='/cart' render = { () => <Cart/>}/>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;

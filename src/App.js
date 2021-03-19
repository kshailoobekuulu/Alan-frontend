import React from "react";
import Header from "./components/Main-Page/Header/Header";
import Menu from "./components/Main-Page/Menu/Menu";
import Banner from "./components/Main-Page/Banner/Banner";
import './App.css';

function App() {
  return (
      <div className='main_page'>
        <Header/>
        <Menu/>
        <Banner/>
      </div>

  );
}

export default App;

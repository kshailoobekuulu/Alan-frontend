import React from "react";
import Header from "./components/Main-Page/Header/Header";
import Menu from "./components/Main-Page/Menu/Menu";
import Banner from "./components/Main-Page/Banner/Banner";
import './App.css';
import Footer from "./components/Main-Page/Footer/Footer";
import Welcome from "./components/Main-Page/Welcome/Welcome";
import MainSlider from "./components/Main-Page/Slider/Slider";
import OurMenu from "./components/Main-Page/OurMenu/OurMenu";

function App() {
  return (
      <div>
        <Header/>
        <Menu/>
        <Banner/>
        <Welcome/>
        <MainSlider/>
        <OurMenu/>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        <Footer/>
      </div>
  );
}

export default App;

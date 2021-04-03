import React from "react";
import Banner from "./Banner/Banner";
import Welcome from "./Welcome/Welcome";
import MainSlider from "./Slider/Slider";
import OurMenu from "./OurMenu/OurMenu";

const MainPage = () => {
    return (
        <div>
            <Banner/>
            <Welcome/>
            <MainSlider/>
            <OurMenu/>
        </div>
    )
}
export default MainPage;
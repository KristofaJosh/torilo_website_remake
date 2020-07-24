import React from 'react';
import './styles/App.css';
import Footer from "./web/components/sections/footer";
import WhyTorilo from "./web/components/sections/whytorilo";
import AboutUs from "./web/components/sections/aboutus";
import Services from "./web/components/sections/services";
import Hero from "./web/components/sections/hero";
import Header from "./web/components/molecules/headers";
import styled from "styled-components";


function App() {


    return (
        <AppStyle>
            <Header/>
            <Hero/>
            <Services/>
            <AboutUs/>
            <WhyTorilo/>
            <Footer/>
        </AppStyle>
    );
}

const AppStyle = styled.div`
position: relative;


`;

export default App;

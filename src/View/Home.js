import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import WelcomePage from '../components/ShowComponents/WelcomePage'
import ShowAsset from '../components/ShowComponents/ShowAsset'
import ShowOurProject from '../components/ShowComponents/ShowOurProject'

function Home() {
    return (
        <div>
            <div className="Navbar-page">
                <Navbar></Navbar>
            </div>
            <div className="Carousel-Slide">
                <Carousel></Carousel>
            </div>
            <div className="Welcome-page">
                <WelcomePage></WelcomePage>
            </div>
            <div className="Show-Asset">
                <ShowAsset></ShowAsset>
            </div>
            <div className="Show-OurProject">
                <ShowOurProject></ShowOurProject>
            </div>
            <div className="Footer-page">
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Home;
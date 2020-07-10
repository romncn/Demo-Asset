import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import WelcomePage from "../components/ShowComponents/WelcomePage";
import ShowAsset from "../components/ShowComponents/ShowAsset";
import ShowOurProject from "../components/ShowComponents/ShowOurProject";

function Home() {
  return (
    <div className="bg-light">
      <div className="Navbar-page">
        <Navbar />
      </div>
      <div className="Carousel-Slide">
        <Carousel />
      </div>
      <div className="container">
        <div className="Welcome-page">
          <WelcomePage />
        </div>
        <div className="Show-Asset">
          <ShowAsset />
        </div>
        <div className="Show-OurProject pt-5">
          <ShowOurProject />
        </div>
      </div>
      <div className="Footer-page" style={{ backgroundColor: "white" }}>
        <div className="container">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;

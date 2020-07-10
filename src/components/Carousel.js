import React from 'react'
import Asset01 from '../assest/Asset-01.jpg'

function Carousel() {
    return (
        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block" style={{height:"100vh", width:"100%", objectFit:"cover"}} src={Asset01} alt="First slide" />%
                </div>
                <div class="carousel-item">
                    <img class="d-block" style={{height:"100vh", width:"100%", objectFit:"cover"}} src={Asset01} alt="First slide" />%
                </div>
                <div class="carousel-item">
                    <img class="d-block" style={{height:"100vh", width:"100%", objectFit:"cover"}} src={Asset01} alt="First slide" />%
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    )
}

export default Carousel;
import React, { Component } from 'react'

export default class carosel extends Component {
    render() {
        return (
            <div id="carouselExampleIndicators" className=" container carousel slide" data-ride="carousel" >
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner ">
                    <div className="carousel-item active">
                        <img className="d-block w-100" src="https://placeimg.com/1080/500/animals" alt="First slide" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>My Caption Title (1st Image)</h5>
                            <p>The whole caption will only show up if the screen is at least medium size.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://placeimg.com/1080/500/arch" alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block w-100" src="https://placeimg.com/1080/500/nature" alt="Third slide" />
                    </div>
                </div>
                <a className="carousel-control-prev" style={{ "textDecoration": "none" }} href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon bg-dark" style={{ "borderRadius": "50%" }} aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" style={{ "textDecoration": "none" }} href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon bg-dark" style={{ "borderRadius": "50%", "marginLeft": "20px" }} aria-hidden="true"></span>
                </a>
            </div>
        )
    }
}

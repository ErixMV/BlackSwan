import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'

export class BootstrapCarousel extends Component {

    render() {
        return (

            <div>

                <div className='container-fluid' style={{ width: "75%" }} >

                    <Carousel>

                        <Carousel.Item style={{ 'height': "650px", background: "black" }} >

                            <img style={{ 'height': "650px", opacity: "0.5" }}

                                className="d-block w-100"

                                src={'/images/home/carousel/img1.jpg'}
                                
                                alt="test" />

                            <Carousel.Caption>

                                <h3 style={{ color: "#fff" }}>Discover your new favourite books </h3>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "650px", background: "black" }} >

                            <img style={{ 'height': "650px", opacity: "0.5" }}

                                className="d-block w-100"

                                src={'/images/home/carousel/img1.jpg'}
                                
                                alt="test" />

                            <Carousel.Caption>

                                <h3 style={{ color: "#fff" }}>First Demo </h3>

                            </Carousel.Caption>

                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "650px", background: "black" }} >

                            <img style={{ 'height': "650px", opacity: "0.5" }}

                                className="d-block w-100"

                                src={'/images/home/carousel/img1.jpg'}
                                
                                alt="test" />

                            <Carousel.Caption>

                                <h3 style={{ color: "#fff" }}>First Demo </h3>

                            </Carousel.Caption>

                        </Carousel.Item>

                    </Carousel>

                </div>

            </div>

        )

    }

}

export default BootstrapCarousel  
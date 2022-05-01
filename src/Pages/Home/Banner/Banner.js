import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner0 from '../../../Assets/banner0.png'
import banner1 from '../../../Assets/banner1.png'
import banner2 from '../../../Assets/banner2.png'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-height"
                        src={banner0}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='text-style'>Our Home Applience Suit With Your Furniture</h1>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-height"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-style'>We also provide free installation</h1>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image-height"
                        src={banner1}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1 className='text-style'>This things are make easy your life</h1>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;
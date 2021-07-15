import React from 'react'

import Carousel from 'react-bootstrap/Carousel'

//import img1 from '../assets/images/Complejo1.jpg'
import img2 from '../assets/images/Complejo2.webp'
import img3 from '../assets/images/Complejo3.webp'
import img4 from '../assets/images/Complejo4.webp'

export default function Carousel1() {
    return (
        <>
            <Carousel>
            {/* <Carousel.Item>
                <img
                className="d-block w-100"
                src={img1}
                alt="First slide"
                />
                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item> */}
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img2}
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img3}
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={img4}
                alt="Fourth slide"
                />

                <Carousel.Caption>
                <h3></h3>
                <p></p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel> 
        </>
    )
}
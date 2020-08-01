import React from 'react'
import image from '../resource/covid-19.jpg'
import { Image } from 'react-bootstrap';

export default function Carousel() {
    return (
        <div>
           <Image src={image} fluid />
        </div>
    )
}



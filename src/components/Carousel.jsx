import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [currIndex, setCurrIndex] = useState(0);

   function handlePrev(){
        setCurrIndex(currIndex>0 ? currIndex - 1 : images.length -1)
        
    }

    function handleNext(){
        setCurrIndex(currIndex < images.length - 1 ? currIndex + 1: 0)
    }


    return(
    <>
    <div className="carousel-container flex" onClick={handlePrev}>

        <div className="leftArrow arrowDiv flex" onClick={handleNext}>
            <ArrowBackIosIcon/>
        </div>

        <div className="rightArrow arrowDiv flex">
            <ArrowForwardIosIcon/>
        </div>

        <h1 className="title">{images[currIndex].title}</h1>

        <h2 className="subtitle">{images[currIndex].subtitle}</h2>

        <img src={images[currIndex].img} alt="" />
    </div>
    </>

    )
}

export default Carousel;
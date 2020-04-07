/** @jsx jsx */
import { jsx } from "@emotion/core";

import React, { useState, useEffect, useRef } from "react";

import SliderContent from "./SliderContent";
import Slide from "./Slide";
import Arrows from "./Arrows";
import Dots from "./Dots";

const PhotoSlider = (images) => {
  const getWidth = () => window.innerWidth;

  const [state, setState] = useState({
    activeIndex: 0,
    translate: 0,
    transition: 0.45,
  });

  const { translate, transition, activeIndex } = state;

  const nextSlide = () => {
    if (activeIndex === images.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeIndex: 0,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex + 1,
      translate: (activeIndex + 1) * getWidth(),
    });
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      return setState({
        ...state,
        translate: (images.length - 1) * getWidth(),
        activeIndex: images.length - 1,
      });
    }
    setState({
      ...state,
      activeIndex: activeIndex - 1,
      translate: (activeIndex - 1) * getWidth(),
    });
  };

  return (
    <div
      className="photos__slider"
      css={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        margin: "0 auto",
        overflow: "hidden",
        backgroundSize: "cover",
      }}
    >
      <SliderContent
        className="photos__slider--slider-content"
        translate={translate}
        transition={transition}
        width={getWidth() * images.slides.length}
      >
        {images.slides.map((slide, i) => {
          return <Slide key={slide + i} content={slide} />;
        })}
      </SliderContent>
      <Arrows direction="left" handleClick={prevSlide} />
      <Arrows direction="right" handleClick={nextSlide} />

      <Dots slides={images} activeIndex={activeIndex} />
    </div>
  );
};

export default PhotoSlider;

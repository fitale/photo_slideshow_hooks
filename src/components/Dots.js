/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";

const Dot = ({ active }) => {
  return (
    <span
      css={css`
        padding: 10px;
        margin-right: 5px;
        cursor: pointer;
        border-radius: 50%;
        opacity: 80%;
        background: ${active ? "black" : "white"};
      `}
    />
  );
};

const Dots = ({ slides, activeIndex }) => {
  console.log(`slides in Dots: ${slides}`);
  return (
    <div
      css={css`
        position: absolute;
        bottom: 25px;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      `}
    >
      {slides.slides.map((slide, i) => {
        console.log(slide);
        return <Dot key={slide + i} active={activeIndex === i} />;
      })}
    </div>
  );
};

export default Dots;

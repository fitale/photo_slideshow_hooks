/** @jsx jsx */
import { jsx } from "@emotion/core";

import React from "react";

const Slide = ({ content }) => {
  return (
    <div
      css={{
        height: "100",
        width: "100%",
        backgroundImage: `url(${content})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Slide;

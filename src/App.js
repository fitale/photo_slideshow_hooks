import React from "react";
import PhotoSlider from "./components/PhotoSlider.js";

import one from "./assets/images/slider_brunswick/fullsizeoutput_7f.jpg";
import two from "./assets/images/slider_brunswick/fullsizeoutput_71.jpg";
import three from "./assets/images/slider_brunswick/fullsizeoutput_74.jpg";
import four from "./assets/images/slider_brunswick/fullsizeoutput_78.jpg";
import five from "./assets/images/slider_brunswick/fullsizeoutput_80.jpg";
import six from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_a6.jpg";
import seven from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_a9.jpg";
import eight from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_b0.jpg";
import nine from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_b2.jpg";
import ten from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_b7.jpg";
import eleven from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_bc.jpg";
import twelve from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_c3.jpg";
import thirteen from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_c4.jpg";
import fourteen from "./assets/images/slider_brunswick/UNADJUSTEDRAW_thumb_c5.jpg";

function App() {
  const images = [
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
  ];

  return (
    <div className="App">
      <PhotoSlider slides={images} />
    </div>
  );
}

export default App;

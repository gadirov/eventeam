import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slider.css";


const SimpleSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <h2> Single Item</h2>
      <Slider {...settings}>
        <div className="firstpageslider">
          <div className="firstSliderLeftContent">
            <h2>Join and hurry to make new friends </h2>
            <p>Gain new friendships from the Eventeam experience</p>
          </div>
          <div className="firstSliderRightContent">
            <img src="./assests/1.fabd9478bdc053494f94.png" alt="" />
          </div>
        </div>
        <div>
          <div className="firstpageslider">
            <div className="firstSliderLeftContent">
              <h2>Events, training and lots of fun</h2>
              <p>The first event-based social network in Azerbaijan</p>
            </div>
            <div className="firstSliderRightContent">
              <img src="./assests/secondimg.png" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;

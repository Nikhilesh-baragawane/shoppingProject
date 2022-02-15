import Carousel from "react-bootstrap/Carousel";
import React from "react";

export default function Corousel() {
  return (
    <div>
      <Carousel interval={2000} variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../assets/Images/First.png")}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../assets/Images/Second.png")}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../assets/Images/Third.png")}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../assets/Images/Fourth.png")}
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../assets/Images/Fifth.png")}
            alt="Fifth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={require("../../assets/Images/Sixth.png")}
            alt="Sixth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

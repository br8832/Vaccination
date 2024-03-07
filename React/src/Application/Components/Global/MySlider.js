import React from "react";
import Slider from "react-slick";
import Age from "../Charts/Age";
import Gender from "../Charts/Gender";
import Disease from "../Charts/Disease";
import MedicalCert from "../Charts/MedicalCert";
import PopulationCovered from "../Charts/PopulationCovered";
import DosesByDay from "../Charts/DosesByMonth";

export default function MySlider() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        autoplaySpeed: 2000,
        speed: 3000,
        adaptiveHeight: true,
        arrows: false,
        
      };
      return (
        <div style={{margin: "auto"}}>
            <h2>Enjoy these stats</h2>
        <div className="slider-container">
          <Slider {...settings}>
            <div style={{maxWidth:"55%",maxHeight:"55%"}}>
              <Age />
            </div>
            <div style={{maxHeight:"55%"}}>
             <PopulationCovered/>
            </div>
            <div style={{maxHeight:"55%"}}>
             <Gender/>
            </div>
            <div style={{maxHeight:"55%"}}>
             <Disease/>
            </div>
            <div style={{maxHeight:"55%"}}>
            <DosesByDay month={new Date().getMonth()}/> 
            </div>
            <div style={{maxHeight:"55%"}}>
             <MedicalCert/>
            </div>
          </Slider>
        </div>
        </div>
      );
      
}
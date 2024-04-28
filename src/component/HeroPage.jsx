import React from "react";
import imageHero from "../assets/images/image-hero-desktop.png";
import datab from "../assets/images/client-databiz.svg";
import audio from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import mobil from "../assets/images/image-hero-mobile.png"
import { Button, Container } from "react-bootstrap";



const HeroPage = () => {
  return (
    
      <div className="d-flex  heroPager ">
        <div className="d-flex flex-column gap-4 leftside ">
          <h1>
            <span className="d-block me-2">Make</span> remote work
          </h1>
          <p>
            Get your team in sync, no matter your location. <span className="d-block">Streamline
            processes, create team rituals, and</span> watch productivity soar.
          </p>
          <Button className="butty rounded-3 bg-white text-black border-black">Learn more</Button>
          <div className="d-flex gap-4 audandrest">
            <img src={datab} alt=""  className="datap"/>
            <img src={audio} alt="" className="audiop"/>
            <img src={meet} alt=""  className="meetp"/>
            <img src={maker} alt="" className="makerp" />
          </div>
        </div>
        <img src={imageHero} alt="" style={{ width: "500px" }}  className="heroPc"/>
        <img src={mobil} alt="" className="d-lg-none heMob" style={{ width: "100%" }}/>
      </div>
   
  );
};

export default HeroPage;

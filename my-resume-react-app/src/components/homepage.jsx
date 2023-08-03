import React from "react";
import SocialMediaLink from "./social-media-link";
import "./homepage.css"
// import { Link as ReactRouterLink } from "react-router-dom";
// import { Link as ChakraLink, LinkProps } from "@chakra-ui/react";

function Homepage() {
  return (
    <div className="home-wrapper">
      <div className="home-header">
        <div className="my-profile-text-wrapper">
          <h1 className="my-profile-text"> My Profile</h1>
        </div>
        <div className="home-navbar">
          <button className="home-button">HOME</button>

          <button className="about-button">ABOUT</button>

          <button className="work-button">WORK</button>


          <button className="contact-button">CONTACT</button>
        </div>
      </div>
      <div className="myprofile">
        <img src="src\image\my-image.png" alt="my-image"></img>
        <h1 className="my-name">Jaraweekorn Udkhammee</h1>
        <h1 className="my-profile-info">I am an in-training Web Developer</h1>
      </div>
      <div className="social-media">
        <div className="follow-me-text">
          <h3>Follow me</h3>
        </div>
        <div className="social-media-link">
         <SocialMediaLink/>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import Navbar from "../Component/Navbar";
import HeroPage from "../Component/HeroPage";
// import HeroSection from "./../components/HeroSection";
// import SignInSide from "./../components/SignInSide";

function IndexPage() {
  return (
    <div className="container-fluid">
      <div className="container-90">
      <Navbar />   
      <HeroPage /> 
    </div>
    </div>
    );
}

export default IndexPage;
import React from "react";
import Dropdown from "./dropDown/dropDown";
import Footer from "./footer/footer";
import Hero from "./heroSection/hero";

function Home(){
  return(
    <div>
      <Hero/>
      <Dropdown/>
      <Footer/>
    </div>
  )
};

export default Home;
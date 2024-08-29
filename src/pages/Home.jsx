import React, { useEffect, useState } from 'react';
import "../css/header.css"
import SlideImage from '../layout/SlideImage';
import HomeSeconsPart from '../layout/HomeSeconsPart';
import SliderLayout from '../layout/SliderLayout';
import Category from '../layout/Category';
import CounterItems from '../layout/CounterItems';
import ContactPage from '../layout/ContactPage';


function Home(props) {


  document.title = "HarshAgarbati";
  return (
    <>
      {/* slide image part start */}
      <SlideImage/>
      {/* slide image part end */}


      {/* second part start */}
      <HomeSeconsPart/>
      {/* second part end */}

      {/* slider part start */}
      <SliderLayout/>
      {/* slider part end */}

      {/* Blogs part start */}
      <Category/>
      {/* blogs part end */}


      {/* Counter part start */}
      <CounterItems/>
      {/* Counter part end */}



      {/* contact part start */}
      <ContactPage/>
      {/* contact part end */}
    </>
  );
}

export default Home;
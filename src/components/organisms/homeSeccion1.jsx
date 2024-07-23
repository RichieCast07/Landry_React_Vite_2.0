import React from 'react';
import TopbarStart from '../molecules/topBarStart.jsx';
import NavBar from '../molecules/navBar.jsx';
import Carrousel from '../molecules/carrousel.jsx';
import ContactInfo from '../molecules/contactInfo.jsx';
import About from '../molecules/about.jsx';
import Service from '../molecules/service.jsx';
import Features from '../molecules/features.jsx';
import WorkingProcess from '../molecules/workingProces.jsx';
import PricingPlan from '../molecules/preacingPlan.jsx';
import Testimonial from '../molecules/testimonial.jsx';
import Blog from '../molecules/blog.jsx';
import Footer from '../molecules/footer.jsx';
import BackToTopButton from '../molecules/backToTapButton.jsx';
function HomeSeccion1 (){
  return (
    <>
    <TopbarStart/>
    <NavBar/>
    <Carrousel/>
    
    
    {/* <Testimonial/> */}
    
    </>
  );
};

export default HomeSeccion1;
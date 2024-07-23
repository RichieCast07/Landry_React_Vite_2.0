import React from 'react';
import HomeSeccion1 from '../organisms/homeSeccion1';
import HomeSeccion2 from '../organisms/homeSeccion2';
import HomeSeccion3 from '../organisms/homeSeccion3';
import HomeSeccion4 from '../organisms/homeSeccion4';
import '../../css/style.css';
import '../../css/style.min.css';
function Home (){
  return (
    <>
    <HomeSeccion1/>
    <HomeSeccion2/>
    <HomeSeccion3/>
    <HomeSeccion4/>
    </>
  );
};

export default Home;
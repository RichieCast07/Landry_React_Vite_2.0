import React from 'react';

function Iconos (props){
  return (
    <>
    <a className="text-white px-3" href="#">
                  <i className={props.className}></i>
                </a>
                
    </>
  );
};

export default Iconos;
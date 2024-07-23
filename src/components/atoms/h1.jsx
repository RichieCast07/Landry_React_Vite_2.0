import React from 'react';

function H1 (props){
  return (
    <>
    <h1 className={props.className}>{props.texto}</h1>
    </>
  );
};

export default H1;
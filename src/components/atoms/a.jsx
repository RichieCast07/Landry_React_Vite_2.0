import React from 'react';

function A (props){
  return (
    <>
    <a className={props.className} href={props.href}  dataToggle={props.dataToggle} ariaControls={props.ariaControls} ariaExpanded={props.ariaExpanded}>{props.textoA} </a>
    </>
  );
};

export default A;
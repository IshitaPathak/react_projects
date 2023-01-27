import React from 'react';
import SlotEqual from './SlotEqual';
import SlotNotEqual from './SlotNotEqual';

const SlotM = (props) =>{
    // let x = '😎'
    // let y = '😎'
    // let z = '😍'
  
  
  if((props.x===props.y) && (props.x===props.z)){
    return(
      <>
      <h1>{props.x}</h1>
     <SlotEqual/>
      </>
    )
  }
  else{ return (<SlotNotEqual/>) }
  }

  export default SlotM;
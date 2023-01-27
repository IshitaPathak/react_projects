
import React from 'react';

const SlotEqual = (props) =>{
    return(
        <>
        <div className='inner_slot'>
        <h1>{props.x}</h1>
          <h1>{props.x} {props.y} {props.z} </h1>
          <h1>This is Matching</h1>
          <hr />
        </div>
        </>
      )
}

export default SlotEqual;
 
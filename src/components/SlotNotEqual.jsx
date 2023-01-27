import React from 'react'


const SlotNotEqual = (props) =>{
    return(
        <>
        <div className='inner_slot'>
          <h1>{props.x} {props.y} {props.z} </h1>
          <h1>This is not Matching</h1>
          <hr/>
        </div>
        </>
      )
}

export default SlotNotEqual;
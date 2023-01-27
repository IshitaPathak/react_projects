// import React, { useState } from 'react'
// import './index.css'

// const App=()=>{
//   const state = useState();
//   const [count,setCount]=useState("Time");
//   console.log(count);
  
//   const Increment=()=>{
//     var date = new Date();
//     setCount(`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`);
//     console.log("clicked"+ count)
//   };
//   return (   
// <>
// <p>{count}</p>
// <div className='container'>
// <span className='heading-style'>{count}</span>
// <button onClick={Increment} className='btn'>GET TIME</button>
// </div>
// </>
// );
// }

// export default App;




// import React, { useState } from 'react';
// import './index.css'

// const App =()=>{

//   const state = useState();
//   const [time,setTime] =useState("Time")

//   const Update = () =>{
//     var time = new Date().toLocaleTimeString();
//     setTime(time);
//   }
//  return (
//   <>
//   <div className="container">
//   <span className='heading-style'>{time}</span> 
//   <button className="btn" onClick={Update}>GET TIME</button>
//   </div>
//   </>
//  );
// }

// export default App;

//For digital Clock
import React, { useState } from 'react'

const App = () => {
 
  var Timing = new Date().toLocaleTimeString();
  const state = useState();
  const [Time,setTime] = useState(Timing)
  
  const UpdateTime = () =>{
    var Timing = new Date().toLocaleTimeString();
    setTime(Timing);
  };
  setInterval(UpdateTime,1000)

  return <h1 style={{fontSize:"7rem", margin:"300px 0", display:"flex", alignItems:"center",
   justifyContent:"center"}}>{Time}</h1>
}

export default App;



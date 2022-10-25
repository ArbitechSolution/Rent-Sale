// import { CompressOutlined } from '@mui/icons-material';
import axios from 'axios'
import React, { useState, useEffect,useRef } from 'react'

// export default function DataFetch() {

//     let [arr,setArr]=useState([])


//     const handleClick=()=>{
//           let num=Math.floor(Math.random()*10);

//           console.log(num)

//           if (!arr.includes(num)) {
//             setArr([...arr,num])
//           }

//           else{
//             if(arr.length<10)
//                 handleClick()

//           }

//     }


//   return (
//     <div className='container' >


//         <button onClick={handleClick}>Click Me</button>

//         <ul>
//             {
//                 arr.map((elem,index)=>{
//                     return (
//                         <>
//                             <li key={index}>{elem}</li>
//                         </>
//                     )
//                 })
//             }
//         </ul>


//     </div>
//   )
// }

export default function DataFetch() {

  const [count, setCount] = useState(0);
  const [doubleCount, setDoubleCount] = useState(count * 2);
  const handleCount = () => {
    setCount(count + 1);
    console.log(count)
    // setDoubleCount(count * 2); // This will not use the latest value of count
   
  };

  useEffect(()=>{
    setDoubleCount(count * 2);
  },[count])

  return (

    <div className="App">
      <div>
        <h2>Count Without useEffect</h2>
        <h3>Count: {count}</h3>
        <h3>Count * 2: {doubleCount}</h3>
        <button onClick={handleCount}>Count++</button>
      </div>
    </div>
  )

}



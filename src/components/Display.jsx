import React from 'react'
import { useSelector } from 'react-redux'
import './Display.css'

const Display = () => {
   console.log("???????????????????????//");
  const colorSelect= useSelector((state)=>state)
//   console.log(colorSelect,"selector");
const color=colorSelect.payload
console.log(color,"......");
  return (
   <div className='div'>
      {color?<div className='orange'>Orange</div>:<div className='blue'>Blue</div>}

   </div>
    
  )
}

export default Display
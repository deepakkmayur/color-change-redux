import React from 'react'
import './Home.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { colorAction } from '../store/actions/Action'
import Display from './Display'


 const Home = () => {
 const [color,setColor]=useState(false)
 const dispatch=useDispatch()

 const handleColor=()=>{
   setColor((prev)=>!prev)
   dispatch(colorAction(color))

 }

  return (
    <div>
      <button className='button' onClick={handleColor}>change color</button>
      <h1>{<Display/>}</h1>
    </div>
  )
}

export default Home
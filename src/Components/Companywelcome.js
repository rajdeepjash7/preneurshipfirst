import React from 'react'
import "./Companywelcome.css"
import Companywelcomeimg from "./companywelcomeimg.PNG"
import { useNavigate } from 'react-router-dom'
const Companywelcome = () => {
    const history=useNavigate();
  return (
    <div>
    <div className='company-container'>
    <div className='logo-container'>
 <div className='logo-circle'></div>
    <h1>Company Name</h1>
    <h2>User Name</h2>
    </div>
    <img src={Companywelcomeimg}/>
    </div>
    <button type='submit' onClick={()=>history("/")}>Next</button>
    </div>
  )
}

export default Companywelcome
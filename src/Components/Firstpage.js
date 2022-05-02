import React from 'react'
import Welcomeimg from "./welcomeimg.PNG"

import "./Firstpage.css"
import { useNavigate } from 'react-router-dom'
const Firstpage = () => {
const history = useNavigate
  return (
    <div>
    <div className='container'>
    <div className='upper3'>
    <div className='inner-upper'>
    <div className='welcome'>Welcome,</div><div className='circle-logo'></div>
    </div>
    Make Your <span>dreams</span> come <span>true</span>
    <p><a className="link" href='/verification'>Get Started</a></p>
    
    </div>
    <img src={Welcomeimg} alt="slow connection"/>
    
    </div>
    <div className='getstarted'>
    
    </div>
    </div>
  )
}

export default Firstpage
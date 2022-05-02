import React from 'react'
import "./verifying.css"
import Verifyingimg from "./verifyingimg.PNG"
const Verifying = () => {
  
      
  return (
    <div>
    <div className='loader-container'>
    
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    <img src={Verifyingimg}/>
    </div>

    </div>
  )
}

export default Verifying
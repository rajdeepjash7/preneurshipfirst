import React from 'react'
import "./Registration.css"
import { useNavigate } from 'react-router-dom'
const Registration = () => {
  const history=useNavigate();
  return (
    <div>
 <div className='container'>
    <div className='heading2'>
    Just a <span>few</span> more <span>steps!</span>
    </div>
    <form className="form-container">
    <input type="text" placeholder="Company's valuation" required/>
    <input type="text" placeholder="No. of employee" required/>
    <input type="text" placeholder="Company's type" required/>
    <div id='radio-upper'>Have You Invested Previously</div>
    <div className='radio'>
    <span>Yes</span>
    <input type="radio" required/>
    </div>
    <div className='radio'>
    <span>No</span>
   <input type="radio" required/>
    </div>
    <button type='submit' onClick={()=>history("/companywelcome")}>Next</button>
    </form>
    </div>
    </div>
  )
}

export default Registration
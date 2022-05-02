import React from 'react'
import { useState } from 'react';
import "./Secondpage.css"
import placeholder from './placeholder2.png';
import {useNavigate} from 'react-router-dom';
const Secondpage = () => {
    const history=useNavigate();
 
    const [{alt, src}, setImg] = useState({
        src: placeholder,
        alt: 'Upload an Image'
    });
    var size={
        heigth: "30px",
        width: "40px"
    }
    const handleImg = (e) => {
        if(e.target.files[0]) {
            setImg({
                src: URL.createObjectURL(e.target.files[0]),
                alt: e.target.files[0].name
            });    
        }   
    }
   

   
    
           
  return (
    <div>
    <div className='secondpage-container'>
    <div className='upper1'>
    <div className='logo'>
    
    </div>
    <div className='heading'>
    Welcome to the <span>world</span> of <span>investors</span>
    </div>
   
    </div>
    <form  className='form-container'>
    <input type="text" placeholder='Company name'  required/>
    <div className="form__img-input-container">
    <input 
   
        type="file" 
        accept=".png,.pdf, .jpg, .jpeg" 
        id="f02" 
        className="visually-hidden"
        
    />
    <label for="f02">Verify documents</label>
    
   
  
</div>
<div style={{textAlign:"center"}}>Upload Your Company Pan</div>
<div className="form__img-input-container">
<input 

    type="file" 
    accept=".png,.pdf, .jpg, .jpeg" 
    id="f02" 
    className="visually-hidden"
    
/>
<label for="f02">Verify documents</label>



</div>
<div style={{textAlign:"center"}}>Upload Your Company Pan</div>
<p className='formlabel'><a href='#'>need any help for verification</a></p>
<button type='submit' onClick={()=>history("/verifying")}>Verify</button>
    </form>
    </div>
    </div>
  )
}

export default Secondpage
import React from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import "./style.css"



const PatientOrDoctor = () => {
    const navigate = useNavigate();

  return (
    <div className='PatientOrDoctor'>
    <div className='PatientButton'>
    <img className='tecImg' src=""/>

      <button className='patButton' onClick={()=>{
navigate("/patientregister")
      }}>Patient</button>
    </div>
       <div className='DoctorButton'>
       <img className='stuImg' src=""/>
       <button className='DocButton' onClick={()=>{
 navigate("/doctorregister")
       }}>Doctor</button>
       
     </div>
     
 </div>

  )}
  export default Default
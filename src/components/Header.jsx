import React from 'react'
import logo from '../assets/glowmendTitle__1_-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPowerOff } from '@fortawesome/free-solid-svg-icons'

function Header() {
  return (
    <>
      <div className='pt-5 pb-4 d-flex justify-content-between' style={{Height:"70px", backgroundColor:"#76453fee"}}>
        <img className='ms-4' src={logo} alt=""  style={{width:"15%", height:"100%"}}/>
        <button className='me-5 btn' style={{backgroundColor:"none"}}><FontAwesomeIcon className='fs-3' icon={faPowerOff} style={{color: "#fbfcfe",}} /></button>
      </div>
    </>
  )
}

export default Header

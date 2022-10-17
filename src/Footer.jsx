import React from 'react'
import "./Footer.css"
import {AiOutlineInstagram} from 'react-icons/ai'
function Footer() {
  return (
    <div className="containerFooter">
        <p>Made with love by Benedetto Giallombardo</p>
        <AiOutlineInstagram onClick={()=>{window.open("https://www.instagram.com/itive3_lista2/")}} id='insta'/>
    </div>
  )
}

export default Footer
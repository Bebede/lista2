import React from 'react'
import "./FixedElements.css"

function FixedElements() {
  return (
    <header className='containerFixedElements'>
        <div id='background'>
            <div className="containerNavbar">
                <ul>
                    <li>Home</li>
                </ul>
            </div>
            <div id='lista2'>
                <ul>
                    <li>Lista</li>
                    <li>2</li>
                    
                </ul>
            </div>

        </div>
        <div id='lineanera'></div>

    </header>
  )
}

export default FixedElements
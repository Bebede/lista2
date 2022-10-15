import React from 'react'
import "./PuntoLista.css"
function PuntoLista() {
  return (
    <div className="containerPuntoLista">
        <div className="nonvisibile">

        </div>
        <div className="visibile">
        <div className="unpunto">
                <div className="linee">
                    <div className="linea linea1"></div>
                    <div className="linea linea2">

                </div>
                </div>
                <div className="niente"></div>
                <h2 className="titolopunto"></h2>
                <p className="descrizionepunto"></p>
            </div>
            <div className="unpunto">
                <div className="linee">
                    <div className="linea linea1"></div>
                    <div className="linea linea2">

                </div>
                </div>
                <div className="niente"></div>
                <h2 className="titolopunto"></h2>
                <p className="descrizionepunto"></p>
            </div>
            
          
        </div>
    </div>
  )
}

export default PuntoLista
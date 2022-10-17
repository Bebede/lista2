import React from 'react'
import { useInView } from 'react-hook-inview'

function Settimana({titolo, descrizione}) {
const [ref, inView] = useInView();
  return (
    <div className={inView? "unpunto" : "unpunto animazione"}>
    <div className="linee">
        <div className="linea linea1"></div>
        <div className="linea linea2">

    </div>
    </div>
    <div className="niente"></div>
    <h2 ref={ref} style={{fontSize: "1.4em"}} className="titolopunto">{titolo}</h2>
    <p className="descrizionepunto">{descrizione} </p>
</div>
  )
}

export default Settimana
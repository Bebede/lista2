import React from 'react'
import "./PuntoLista.css"
import { useInView } from 'react-hook-inview'
import Settimana from './tuttiipunti/Settimana';
function PuntoLista() {

   
    const [ref, inView] = useInView();

    return (
        <div className="containerPuntoLista">
            <div className="nonvisibile">

            </div>
            <div className="visibile">
            <div className={inView? "unpunto" : "unpunto animazione"}>
                    <div className="linee">
                        <div className="linea linea1"></div>
                        <div className="linea linea2">

                    </div>
                    </div>
                    <div className="niente"></div>
                    <h2 ref={ref} className="titolopunto"> Struttura scolastica </h2>
                    <p className="descrizionepunto">
                        è evidente che la nostra struttura scolastica sia in declino: tetti che rischiano di cadere sugli alunni, una "palestra" all'aperto nella quale non si potrebbe neanche correre visto il suo stato, pochi bagni, e per quelli che ci sono mancano anche le porte, laboratori con buchi sul pavimento dove si sentono persino i topi.
                    </p>
                </div>
               <Settimana descrizione={"per chi non lo sapesse: la settimana dello studente è una settimana dedicata alle attività ricreative e didattiche extracurricurali nella quale i professori non possono interrogare o spiegare cose nuove."} titolo={"Settimana dello studente"}/>
               <Settimana descrizione={"a quanti è mai capitato di rimanere indietro durante l'anno? è per questo che proporremo ai vari dipartimenti di organizzare dei corsi di recupero extrascolastici. E per chi è già bravo? in base alla disponibilità di insegnanti/studenti cercheremo di realizzare corsi extracurriculari come nella settimana dello studente  "} titolo={"Corsi"}/>
                
            
            </div>
        </div>
    )
}

export default PuntoLista
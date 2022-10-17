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
                <Settimana titolo={"Viaggi d'istruzione"} descrizione={"faremo reintrodurre i viaggi d'istruzione per le quinte"}/>
                <Settimana titolo={"Gite scolastiche"} descrizione={"siamo stanchi delle solite gite al cinema, proporremo ai vostri insegnanti, quando richiesto da voi, gite scolastiche inerenti al vostro indirizzo. Inoltre cercheremo di organizzare gite scolastiche di cultura generale con altri istituti"}/>
                <Settimana titolo={"Distributori automatici"} descrizione={"Al preside non piace vederci tutti ammassati alla ricreazione? Non ci interessa. A meno che non ci siano delle motivazioni valide ci batteremo per riavere i distributori."}/>
                <Settimana titolo={"Sportello d'ascolto"} descrizione={"Sempre più ragazzi hanno bisogno di aiuto, o semplicemente di una persona con cui parlare e confidarsi, è per questo che lo sportello d'ascolto è un qualcosa di fondamentale che non dovrebbe mancare in nessuna scuola."}/>
                
                <Settimana  titolo={"Comunicazione"} descrizione={"Ultimo punto ma non per importanza; la comunicazione fra studenti e rappresentanti è fondamentale, NOI ci saremo sempre PER VOI, per parlare di problemi della scuola e non solo: dei problemi inerenti alla vostra classe che i rappresentanti di classe non hanno risolto, di vostri problemi personali e se sarà il caso vi indirizzeremo verso lo sportello di ascolto. Il tutto sarà possibile anche in maniera anonima su questo sito se ci eleggerete. Per il momento ci trovate alla b111"} />
            </div>
        </div>
    )
}

export default PuntoLista
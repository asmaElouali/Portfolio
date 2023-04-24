import React from 'react';
import Card from 'react-bootstrap/Card';

function Formations() {
  return (
    <div className='container'>   
    <Card>
    <Card.Body>
      <Card.Title>Ingénierie Informatique et Réseaux Option : Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE)</Card.Title>
      <Card.Text style={{color:'grey'}}>
       Ecole Marocaine des Sciences de l'Ingénieur (EMSI - MARRAKECH)
      </Card.Text>
      <p>2021 - en cours</p>
    </Card.Body>
    </Card>
    <br />
    <Card>
    <Card.Body>
      <Card.Title>DEUST - FSTE</Card.Title>
      <Card.Text style={{color:'grey'}}>
        Faculte des sciences et  Techniques d'Errachidia - MIP.
      </Card.Text>
      <p>2018 - 2021</p>
    </Card.Body>
    </Card>
    <br/>
    <Card>
    <Card.Body>
      <Card.Title>BAC - Science Physique</Card.Title>
      <Card.Text style={{color:'grey'}}>
       Lycee Salah Idin El Ayoubi - Tinghir.
      </Card.Text>
      <p>2017 - 2018</p>
    </Card.Body>
    </Card>
   </div>
  )
}

export default Formations;
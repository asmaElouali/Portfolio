import React from 'react';
import Card from 'react-bootstrap/Card';

function Experiences() {
  return (
    <div className='container mb-4'>
    <Card>
      <Card.Body>
        <Card.Title><h2>Stage de fin d'année 2022</h2></Card.Title>
        <h6 style={{color:'grey'}}>Stagiaire</h6>
        <Card.Text>
          <h5>Sujet de Stage :</h5>
          <p style={{fontSize:'20px'}}>Une application web de gestion de reservation des chambres de l'hotel.</p>
          <h5>Les technologies: HTML , CSS , JavaScript , PHP, MySQl</h5>
          <h5>Entreprise : NetWork service info</h5>
           
        </Card.Text>
      </Card.Body>
      <Card.Footer  className="text-muted"> Date : 21 juillet - 21 aout</Card.Footer>
    </Card>
    </div>
  )
}

export default Experiences;
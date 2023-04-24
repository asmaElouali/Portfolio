import React from 'react';
import {Card} from 'react-bootstrap';

function Home() {
  return (
    <div class="container mt-4">
      <section class="section">
        <Card>
      <Card.Header as="h5">EL Ouali Asma</Card.Header>
      <Card.Body>
        <Card.Title>Future ingenieure en informatique (MIAGE)</Card.Title>
        <Card.Text>
          Etudiante en quatrieme année en developement Informatique et Réseau a Ecole Marocaine de science d'ingenieur (EMSI) avec des Competences de developement.
          Mes passions tournent auteur de la creation et developement et decouvert des nouvelles choses,ayant un esprit critique qui me permet d'analyser,porter a
          bien des projets pour moi toujours source de satisfaction.
        </Card.Text>
      </Card.Body>
    </Card>
      </section>
      </div>
  )
}

export default Home;
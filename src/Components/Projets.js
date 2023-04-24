import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Projets() {
    return (
        <div className='container'>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col key={idx}>
                        <Card>
                            <Card.Body>
                                <Card.Title>{idx === 0 ? "Application desktop de gestion et de reservation des livres de bibliotheque en python" : idx === 1 ? "Application desktop de gestion de stocke de magasin des vétements Sportifs en java" : idx === 2 ? "Application desktop de gestion de stocke de parapharmacie en c# et sql server" : idx === 3 ? "Application web de gestion de reservation des chambres d'hotel en php et langages de script (javaScript,HTML,CSS)"
                                    : idx === 4 ? "Application Web et Mobile de localisation des restaurant en Spring boot and react js" : idx === 5 ? "Application Web et Mobile de localisation des terrains de football":"" }
                                </Card.Title>
                                <Card.Text style={{color:'grey'}}>
                                    {idx === 0
                                        ? "Ecole marocaine de science d'ingenieur Marrakech (EMSI)  Projet de fin d'annee 2021-2022"
                                        : idx === 1
                                            ? "Ecole marocaine de science d'ingenieur Marrakech (EMSI)  Projet de fin de semestre 2022-2023"
                                            : idx === 2
                                                ? "Ecole marocaine de science d'ingenieur Marrakech (EMSI)  Projet de fin de semestre 2022-2023"
                                                : idx === 3
                                                    ? "Entreprise Commerciale NetWork Service info Marrakech Projet de fin de formation 2020-2022"
                                                    : idx === 4
                                                        ? "Ecole marocaine de science d'ingenieur Marrakech (EMSI) 2023-2024"
                                                        : "Ecole marocaine de science d'ingenieur Marrakech (EMSI) Projet de fin d'annee 2023-2024"}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Projets;
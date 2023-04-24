import './App.css';
import React from 'react';
import IMAGES from './images/index.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBFooter, MDBContainer, MDBIcon, MDBBtn } from 'mdb-react-ui-kit';
import Certifications from './Components/Certifications';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Formations from './Components/Formations';
import Experiences from './Components/Experiences';
import Projets from './Components/Projets';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="text-center mb-4">
          <img src={IMAGES.imgOne} alt="" className="rounded-circle profile-img" />
        </div>
        <h1>EL Ouali Asma</h1>
        <h2>Future Ingénieure en Informatique et Réseau</h2>
      </header>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">Accueil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/formations">Formations</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/experiences">Expériences</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/projets">Projets</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/certifications">Certifications</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/formations' element={<Formations />} />
          <Route path='/experiences' element={<Experiences />} />
          <Route path='/projets' element={<Projets />} />
          <Route path='/certifications' element={<Certifications />} />
        </Routes>
      </BrowserRouter>
     

      <MDBFooter className='bg-light text-center text-white'>
        <MDBContainer className='p-4 pb-0'>
          <section className='mb-4'>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#0082ca' }}
              href='https://www.linkedin.com/in/asma-el-ouali-117239267/'
              role='button'
            >
              <MDBIcon fab icon='linkedin-in' />
            </MDBBtn>
            <MDBBtn
              floating
              className='m-1'
              style={{ backgroundColor: '#333333' }}
              href='https://github.com/asmaElouali'
              role='button'
            >
              <MDBIcon fab icon='github'/>
            </MDBBtn>
          </section>
        </MDBContainer>
        <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
          <a className='text-white' href='#!'>
            asmaelouali372@gmail.com
          </a>
        </div>
      </MDBFooter>
    </div>
  );
}


export default App;

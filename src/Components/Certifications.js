import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import IMAGES from '../images/index.js';

function Certifications() {
    return (
        <>
            <div className='container text'>
                <div className='row'>
                        <div className='col-md-3'  style={{marginLeft: '44px'}}>
                            <div class="card" style={{ width: '23rem'}}>
                                <img src={IMAGES.imgTwo} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">DevOps, Cloud, and Agile Foundations</h5>
                                    <p class="card-text">Coursera Course Certificates <br />Date de délivrance:Mars 19.2023<br /> Identifiant :LEJCW43H8VPQ</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className='col-md-3' style={{marginLeft: '44px'}}>
                            <div class="card" style={{ width: '23rem'}}>
                                <img src={IMAGES.imgThree} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Advanced React</h5>
                                    <p class="card-text">Coursera Course Certificates <br /> Meta Mata <br />Date de délivrance:Feb 17.2023<br /> Identifiant :89Q4FJR3WBA7</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3' style={{marginLeft: '44px'}}>
                            <div class="card" style={{ width: '23rem'}}>
                                <img src={IMAGES.imgfour} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Front-End-Web UI Frameworks and Tools: bootstrap 4</h5>
                                    <p class="card-text">Coursera Course Certificates <br />Date de délivrance:Jan 8.2023<br /> Identifiant :RN83PNJA4UY3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row' style={{ marginTop: '12px' }}>
                        <div className='col-md-3' style={{marginLeft: '44px'}}>
                            <div class="card" style={{ width: '23rem'}}>
                                <img src={IMAGES.imgfive} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Python Function, Files ,and Dictionnaries</h5>
                                    <p class="card-text">Coursera Course Certificates <br />Date de délivrance:May 16.2022<br /> Identifiant :7P3GQ8P2N3BF</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-3' style={{marginLeft: '44px'}}>
                            <div class="card" style={{ width: '23rem'}}>
                                <img src={IMAGES.imgsix} class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Data Collection and Processing With Python</h5>
                                    <p class="card-text">Coursera Course Certificates <br />Date de délivrance:May 9.2022<br /> Identifiant :BP9CCBFNKDPN</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </>
            )
}

            export default Certifications;
//import React, { Component } from 'react'
//import nurse from '../images/Nurse_short_home_image.jpg'
import React from 'react';
import './HomeDesign.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStethoscope } from "@fortawesome/free-solid-svg-icons";
import { faVials } from "@fortawesome/free-solid-svg-icons";
import { faRunning } from "@fortawesome/free-solid-svg-icons";
import { faUserMd } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom'
import ReactPlayer from 'react-player'


function HomeDesign () {
    return (
        <div className='bodyContainer'>
            <header className='headerPage' id='headerReturn'>
                    <div className="coverHome">
                        <div className="overlayHome"></div>
                    </div>
                
                    <div className='textCoverHome' >
                        <h1>¿Que es S.A.M.?</h1>
                        <p>S.A.M. (Soporte Artificial Médico) es una app diseñada para orientar
                            al usuario, identificar padecimientos comunes y diferenciarlos de 
                            los padecimeintos que requieren atención médica personal, diagnosticar
                            padecimientos y emitir recomendaciones de tratamiento.
                        </p>
                        <div className='botonesHeader' >
                            <Link to='/registro' >
                                <button className='buttonSuscribe' type="button">
                                    Registrarme
                                </button>
                            </Link>                            
                            <div className='buttonConoce' >
                                <a href='#publicidad'> 
                                    <button type='button'>Conoce más</button>
                                </a>
                                   
                            </div>
                        </div>
                    </div>
            </header>
            <section className='contentPage' >
                <div className='seccion-consultasBotones' >
                    <div className='tituloConsultas'>
                        <div className='ayuda-pregunta' >
                            <h1>¿En que puedo ayudarte?</h1>
                        </div>
                    </div>                
                    <div className='botonesConsultas' >
                        
                        <Link to='/sintomas' >
                            <button className='btn-1'>
                                <FontAwesomeIcon 
                                    icon={ faStethoscope } 
                                    style={{fontSize:'22px', 
                                            paddingRight:'20px'}}/>
                                ¿Que molestia tienes?
                            </button>
                        </Link>
                        

                        <Link to='/laboratorios' >
                            <button className='btn-2'>
                                <FontAwesomeIcon 
                                    icon={ faVials } 
                                    style={{fontSize:'22px', 
                                            paddingRight:'20px'}}/>                        
                                ¿Revisamos tus laboratorios?
                            </button>
                        </Link>

                        <Link to='/consejos' >
                            <button className='btn-3'>
                                <FontAwesomeIcon 
                                    icon={ faRunning } 
                                    style={{fontSize:'25px', 
                                            paddingRight:'20px'}}/>                        
                                Consejos para tu salud
                            </button>
                        </Link>

                        <Link to='/medicos' >
                            <button className='btn-4'>
                                <FontAwesomeIcon 
                                    icon={ faUserMd } 
                                    style={{fontSize:'25px', 
                                            paddingRight:'20px'}}/>
                                Consulta un Médico
                            </button>
                        </Link>
                    </div>
                </div>

                <div className='textoPublicity' id="publicidad" >  
                    <div className='espacio' ></div>                  
                    <h1>¿Porqué debo suscribirme?</h1>
                    <p>En el siguiente video podras ver los beneficios que
                        puedes obtener al suscribirte en nuestra aplicación.
                    </p>
                </div>
                <div className='videoPublicity' >
                    <ReactPlayer
                        url='https://youtu.be/AgBUP8TJqV8'
                        className='react-player'
                        playing
                        width='50%'
                        height='100%'
                    />
                </div>

                <div className='btn-inicio'>
                    <a href='#headerReturn'> 
                        <button type='button'>
                            <FontAwesomeIcon 
                                icon={ faHome } 
                                style={{fontSize:'35px', 
                                paddingRight:'0px',
                                }}/>
                            Regresar al inicio
                        </button>
                    </a>

                </div>
            </section>


        </div>
    )
}

/*
class HomeDesign extends Component {
    render() {
        return (
            <div className='bodyContainer' >
                <header className='headerPage' >
                    <div className="coverHome"
                        style = {{
                        backgroundImage: `url(${nurse})`,
                        width:'1200px'
                        }}>

                        <div className="overlayHome"></div>
                    </div>
                
                    <div className='textCoverHome' >
                        <h1>¿Que es S.A.M.?</h1>
                        <p>S.A.M. (Soporte Artificial Médico) es una app diseñada para orientar
                            al usuario, identificar padecimientos comunes y diferenciarlos de 
                            los padecimeintos que requieren atención médica personal, diagnosticar
                            padecimientos y emitir recomendaciones de tratamiento.

                        </p>
                        <button>Botón</button>
                    </div>
                </header>

                
            </div>
        )
    }
}
*/
export default HomeDesign

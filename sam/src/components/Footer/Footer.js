import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer' 
                style={{background:'#00001A',
                color:'white'
                }} >

                <div className='footerColumnas' >

                    <div className='columna1'>
                        <div className='marca' >
                            <h1>LOGO</h1>
                        </div>
                            
                        <div className='acerca' >
                            <h1>Acerca</h1>
                            <p>S.A.M. es una aplicación médica para apoyar y orientar a los usuarios a mejorar su salud.</p>
                        </div>

                        <div className='contactanos' >
                            <h1>Contacto</h1>
                            <p>Si desea conocer más sobre el sistema, es médico y quiere formar
                            parte de nuestras referencias, laboratorio clínico o farmacéutico y 
                            desea participar como sponsor </p>
                            <button>Contáctanos</button>
                        </div>
                    </div>

                    <div className='columna2' >
                        <div className='navegacion' >
                            <h1>Nuestro Menú</h1>
                            <ul >
                                <Link to='/sintomas' style={{textDecoration:'none'}} >
                                    <li>Consulta Síntomas</li>
                                </Link>
                                <Link to='/laboratorios' style={{textDecoration:'none'}}  >
                                    <li >Consulta Laboratorios</li>
                                </Link>
                                <Link to='/consejos' style={{textDecoration:'none'}}  >
                                    <li>Consejos para tu salud</li>
                                </Link>
                                <Link to='/medicos' style={{textDecoration:'none'}}  >
                                    <li>Consulta un Médico</li>
                                </Link>
                                <Link to='/nosotros' style={{textDecoration:'none'}}  >
                                    <li>Acerca</li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                    
                    <div className='columna3' >
                        <div className='interes' >
                            <h1>Ligas de interes</h1>
                            <ul>
                                <Link to='/privacidad' style={{textDecoration:'none'}}  >
                                    <li>Póliza de privacidad</li>
                                </Link>
                                <Link to='/condiciones' style={{textDecoration:'none'}}  >
                                    <li>Terminos y condiciones</li>
                                </Link>
                            </ul>
                        </div>
                    </div>

                    <div className='columna4' >
                        <div className='suscribete' >
                            <h1>Suscribete para gozar de los beneficios</h1>
                            <button>Suscribirme</button>
                        </div>
                    </div>
                </div>

                <div className='footerBase' >
                    <div className='socialMedia' >
                        <p>logos redes sociales</p>
                    </div>
                    <div className='brand' >
                            <p>2020 SAM THE DOCTOR APP copyright All Right Reserved</p>
                    </div>
                </div>          

                    

                    
            </div>
        )
    }
}
                
                  

export default Footer

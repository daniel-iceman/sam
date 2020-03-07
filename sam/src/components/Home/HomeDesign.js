//import React, { Component } from 'react'
import React from 'react';
import './HomeDesign.css'
//import nurse from '../images/Nurse_short_home_image.jpg'
import {Link} from 'react-router-dom'


function HomeDesign () {
    return (
        <div className='bodyContainer'>
            <header className='headerPage' >
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
                        <Link to='/registro' >
                            <button className='buttonCoverHome' type="button">
                                Registrarme
                            </button>
                        </Link>
                        
                    </div>
            </header>


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

                <div className='contentPage' >
                    <button>Sintomas</button>
                    <button>Laboratorios</button>
                </div>
            </div>
        )
    }
}
*/
export default HomeDesign

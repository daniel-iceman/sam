import React, { Component } from 'react'
import './HomeDesign.css'
import nurse from '../images/Nurse_short_home_image.jpg'

class HomeDesign extends Component {
    render() {
        return (
            <div className='bodyContainer' >
                <div className='headerPage' >
                    <div className="coverHome"
                        style = {{
                        backgroundImage: `url(${nurse})`,
                        }}>

                        <div className="overlayHome"></div>
                    </div>
                
                    <div className='textCoverHome' >
                        <h1>Titulo</h1>
                        <p>Contenido</p>
                        <button>Botón</button>
                    </div>
                </div>

                <div className='contentPage' >
                    <button>Sintomas</button>
                    <button>Laboratorios</button>
                </div>
            </div>
        )
    }
}

export default HomeDesign

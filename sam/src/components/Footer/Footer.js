import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
    render() {
        return (
            <div className='footer' >
                <div>
                    <p>Si desea conocer más sobre el sistema, es médico y quiere formar
                    parte de nuestras referencias o bien desea participar como sponsor </p>
                    <button>boton</button>
                </div>
                <div>
                    <ul>
                        <Link to='/sintomas' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consulta Síntomas</li>
                        </Link>
                        <Link to='/laboratorios' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consulta Laboratorios</li>
                        </Link>
                        <Link to='/consejos' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consejos para tu salud</li>
                        </Link>
                        <Link to='/medicos' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consulta un Médico</li>
                        </Link>
                        <Link to='/nosotros' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Acerca</li>
                        </Link>
                        <Link to='/privacidad' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Póliza de privacidad</li>
                        </Link>
                        <Link to='/condiciones' >
                            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Terminos y condiciones</li>
                        </Link>
                    </ul>
                </div>

                <div>
                    <h1>LOGO</h1>
                    <p>2020 SAM THE DOCTOR APP</p>
                </div>
                
                
            </div>
        )
    }
}

export default Footer

import React from 'react'
import './SideDrawer.css'
import {Link} from 'react-router-dom'

const sideDrawer = props => { 
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul>
                <Link to='/' >
                    <li>Inicio</li>
                </Link>
                <Link to='/sintomas' >
                    <li>Consulta Sintomas</li>
                </Link>
                <Link to='/laboratorios' >
                    <li>Consulta Laboratorios</li>
                </Link>
                <Link to='/consejos' >
                <li>Consejos para tu salud</li>
                </Link>
                <Link to='/medicos' >
                <li>Consulta un Médico</li>
                </Link>
                <Link to='/nosotros' >
                    <li>Nosotros</li>
                </Link>
                <Link to='/contacto' >
                    <li>Contacto</li>
                </Link>
                <Link to='/registro' >
                    <li>Registro</li>
                </Link>
                <Link to='/ajustes' >
                    <li>Ajustes</li>
                </Link>
                <li>Salir</li>
            </ul>
        </nav>
    );
};

export default sideDrawer
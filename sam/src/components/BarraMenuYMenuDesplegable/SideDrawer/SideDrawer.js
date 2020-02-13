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
                    <li><a href = '/'>Inicio</a></li>
                </Link>
                <Link to='/sintomas' >
                    <li><a href = '/'>Consulta Sintomas</a></li>
                </Link>
                <Link to='/laboratorios' >
                    <li><a href = '/'>Consulta Laboratorios</a></li>
                </Link>
                <Link to='/consejos' >
                <li><a href = '/'>Consejos para tu salud</a></li>
                </Link>
                <Link to='/medicos' >
                <li><a href = '/'>Consulta un Médico</a></li>
                </Link>
                <Link to='/nosotros' >
                    <li><a href = '/'>Nosotros</a></li>
                </Link>
                <Link to='/contacto' >
                    <li><a href = '/'>Contacto</a></li>
                </Link>
                <Link to='/registro' >
                    <li><a href = '/'>Registro</a></li>
                </Link>
                <Link to='/ajustes' >
                    <li><a href = '/'>Ajustes</a></li>
                </Link>
                <li><a href = '/'>Salir</a></li>
            </ul>
        </nav>
    );
};

export default sideDrawer
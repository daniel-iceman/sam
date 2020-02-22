import React from 'react'
import './UserDrawer.css'


import {Link} from 'react-router-dom'

const userDrawer = props => { 
    let drawerClasses = 'user-drawer';
    if (props.show) {
        drawerClasses = 'user-drawer open';
    }
    return (
        <nav className={drawerClasses}>
            <ul style={{fontFamily: 'Montserrat'}} >
                <Link to='/signin' >
                    <li>Iniciar Sesión</li>
                </Link>
                <Link to='registro' >
                    <li>Registro</li>
                </Link>                
                <Link to='/mihistorial' >
                    <li>Mi Historial</li>
                </Link>
                                
                <li style={{
                    fontFamily: 'Montserrat', 
                    color:'white', 
                    fontSize:'20px', 
                    letterSpacing:'1.8px'}} >Salir</li>
            </ul>
        </nav>
    );
};

export default userDrawer
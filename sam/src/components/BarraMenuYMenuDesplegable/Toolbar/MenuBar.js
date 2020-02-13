import React from 'react'
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import SubMenu from '../SubMenu/SubMenu'
import './MenuBar.css'
import {Link} from 'react-router-dom'


const MenuBar = props => (
    <header className = "menubar">
        <nav className = "menubar_navigation">
            <div className='menubar_toogle_button'>
                <DrawerToggleButton click={props.drawerClickHandler} /> 
            </div>
            <div className="menubar_logo"><a href ="/">The Logo</a></div>
            <div className='spacer'></div>
            <div className='menubar_navigation_items'>
                <ul>
                    <Link to='/' >
                        <li><a href = '/'>Inicio</a></li>
                    </Link>
                </ul>
            </div>       
            <div>
                <SubMenu />
            </div>
                    
            <div className='menubar_navigation_items'>
                <ul>
                    <Link to='/nosotros' >
                        <li><a href = '/'>Nosotros</a></li>
                    </Link>
                    <Link to='/registro' >
                        <li><a href = '/'>Registro</a></li>
                    </Link>
                    <Link to='/contacto' >
                        <li><a href = '/'>Contacto</a></li>
                    </Link>
                </ul>
            </div>
                    


                    
                    
                   
        </nav>

    </header>
);

export default MenuBar










import React from 'react'
import MenuBar from  '../Toolbar/MenuBar'

import SideDrawer from '../SideDrawer/SideDrawer'
import Backdrop from '../Backdrop/Backdrop'

import UserDrawer from '../UserDrawer/UserDrawer'
import UserBackdrop from '../UserBackdrop/UserBackdrop'





/* El "state" "sideDrawerOpen: false" mantiene el recuadro del menu emergente cerrado
y el "drawerToogleClickHandler" lo abre ya que retorna un estado opuesto al cerrado
"!prevState.sideDrawerOpen".
El "backdropClickHandler" cierra el menu emergente una vez que esta abierto.
*/
class Menu extends React.Component{ 
    state = {
        /*Estado inicial del menú de Navegación */
        sideDrawerOpen: false,

        /*Estado inicial del menú de Usuario */
        usuarioMenuOpen: false,

    };

    /* Controlde apertura del menú de navegación */
    drawerToogleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };
    backdropClickHandler = () => {
        this.setState({sideDrawerOpen: false});                
    };

    /* Control de apertura del menu de usuario */
    userDrawerToogleClickHandler = () => {
        this.setState((prevState) => {
            return {usuarioMenuOpen: !prevState.usuarioMenuOpen};
        });
    };
    userBackdropClickHandler = () => {
        this.setState({usuarioMenuOpen: false});                
    };

    

    render(){

        let sideDrawer;        
        let backdrop;

        let userDrawer;
        let userBackdrop;
        
        /* Condicional para despliegue del menú de Navegación */
        if (this.state.sideDrawerOpen) {
            sideDrawer = <SideDrawer />;
            backdrop = <Backdrop click = {this.backdropClickHandler} />
        }

        /* Condicional para despliegue del menú de Usuario */
        if (this.state.usuarioMenuOpen) {
            userDrawer = <UserDrawer />;
            userBackdrop = <UserBackdrop click = {this.userBackdropClickHandler} />
        }


        return( 
            <div style = {{height: '100%'}}>
                <MenuBar drawerClickHandler = {this.drawerToogleClickHandler} userDrawerClickHandler = {this.userDrawerToogleClickHandler} />
                {sideDrawer}
                {backdrop}
                {userDrawer}
                {userBackdrop}

                {/*<SideDrawer show={this.state.sideDrawerOpen} />*/}
                 
                {/*<UserDrawer /> 
                <UserBackdrop /> */}             
                
                />
            </div>
    
        )
    }
    
}

                       
export default Menu
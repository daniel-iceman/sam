import React from 'react';
import './SubMenu.css';
import {Link} from 'react-router-dom'


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{width:"80px"}} > 
         <div className="buttonSM" onClick={this.showDropdownMenu}> Servicios </div>

          { this.state.displayMenu ? (
          <ul className='SubMenuUl'>
            <Link className='link' to='/sintomas' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consulta Síntomas</li>
            </Link>
            <Link className='link' to='/laboratorios' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consulta Laboratorios</li>
            </Link>
            <Link className='link' to='/consejos' >
              <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consejos para tu salud</li>
            </Link>
            <Link className='link' to='/medicos' >
            <li style = {{borderBottom:" 1px solid #e5e5e5"}} >Consulta un Médico</li>
            </Link>
            
          </ul>
        ):
        (
          null
        )
        }

       </div>
         

    );
  }
}

export default Dropdown;
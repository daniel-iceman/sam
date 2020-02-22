import React from 'react'
import './UserDrawerToggleButton.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const userDrawerToggleButton = props => (
    <button className = 'user-toogle-button' onClick = {props.click}>
        <FontAwesomeIcon icon={faUser} style={{fontSize:'26px'}} />        
    </button>

);

export default userDrawerToggleButton
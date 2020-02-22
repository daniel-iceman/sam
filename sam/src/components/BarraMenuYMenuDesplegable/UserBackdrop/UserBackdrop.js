import React from 'react'
import './UserBackdrop.css'

const userBackdrop = props => (
    <div className="user_backdrop" onClick={props.click} />
);

export default userBackdrop
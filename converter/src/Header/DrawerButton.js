import React from 'react';
import './DrawerButton.css'

const DrawerButton = props => (
    <button className="drawer-button" onClick={props.click} >
       <div className="button-line"/>
       <div className="button-line"/>
       <div className="button-line"/>


    </button>
);

export default DrawerButton;
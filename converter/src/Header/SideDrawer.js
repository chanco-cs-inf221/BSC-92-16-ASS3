import React from 'react';
import './SideDrawer.css';
import emoj from '../img/emoj.png';

const SideDrawer = props => {
   let drawerClasses = 'side-drawer';
   if (props.show) {
      drawerClasses = 'side-drawer open'
   }
   return (
   <nav className={drawerClasses}>
     <ol>
       <li><a href="/">Home</a></li>
       <li><a href="about.html">About</a></li>
       <li><a href="/">Contacts</a></li>
        <img src={emoj} className="App-logo" alt="logo" />
       <li><h1>Users</h1></li>
      <div className="side">
      <h3> Projects</h3>
        <li>Currency App </li>
        <li>Timbar Website</li>
        <li>Java System </li>
        <li>App chat</li>


      </div>
    </ol>

    </nav>
    
   );   
};

export default SideDrawer;
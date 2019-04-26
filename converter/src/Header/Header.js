import React from 'react';
import './Header.css';
import  DrawerButton from './DrawerButton';

const Header = props => (
        <div className="main">
         <header className="App-header">
           <div>
             <DrawerButton click={props.drawerClickHandler} />
           </div>
            <h1 className="light"> <span className="highlight"> Timbar </span></h1>
           <nav className="lists">
            <ul>
              <li className="current" > <a href="index.html"> Home</a></li>              
              <li> <a href="about.html"> About</a>
                  <ul>
                    <li><a href="team.html">Our Team</a></li>
                    <li><a href="comp.html">CompSites</a></li>
                    <li><a href="mision.html">Mision</a></li>
                  </ul>
              </li>
              <li> <a href="home.html"> Contacts</a>
                    <ul>
                       <li><a href="map">Maps</a></li>
                       <li><a href="dir.html">Directions</a></li >
                    </ul> 
              </li>
              <li><a href="services.html">Services</a></li>
            </ul> 
            </nav>
        </header>
        </div>
);
 
export default Header;

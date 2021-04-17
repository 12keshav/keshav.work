import React from 'react'
import "../../Molecules/Header/style.scss";
import {Navbar, Nav } from 'react-bootstrap'
import RoutesConfig from '../../../config/RoutesConfig';
import  Router  from "../../../services/RouterService";



const Header = () =>{


    return(
        <>
          
   

          <header className="ToolHeader">
           

          <Navbar expand="lg">
            <Navbar.Brand onClick={() => Router.pushRoute(RoutesConfig.LANDING)}>Keshav Rohilla</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="ms-auto">
                    <Nav.Link onClick={() => Router.pushRoute(RoutesConfig.LANDING)}>Home</Nav.Link>
                    <Nav.Link onClick={() => Router.pushRoute(RoutesConfig.ABOUT)}>About</Nav.Link>
                    <Nav.Link onClick={() => Router.pushRoute(RoutesConfig.WORK)}>Work</Nav.Link>

              
                </Nav>
               
            </Navbar.Collapse>
            </Navbar>

          </header>
            
                      
        </>
    )
}
export default Header;

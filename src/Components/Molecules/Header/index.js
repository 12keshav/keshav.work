import React from 'react'
import "../../Molecules/Header/style.scss";
import RoutesConfig from '../../../config/RoutesConfig';
import  Router  from "../../../services/RouterService";


const Header = () =>{
    return(
        <>
          <header className="ToolHeader">

             <nav class="navbar navbar-expand-lg navbar-light ">
                <div class="container-fluid">
                    <a class="navbar-brand" href=""  onClick={() => Router.pushRoute(RoutesConfig.LANDING)}>Keshav Rohilla</a>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" onClick={() => Router.pushRoute(RoutesConfig.LANDING)}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link"  onClick={() => Router.pushRoute(RoutesConfig.ABOUT)}> About Me</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" onClick={() => Router.pushRoute(RoutesConfig.WORK)}> Work</a>
                        </li>
                    </ul>
                  
                    </div>
                </div>
                </nav> 

          </header>
            
                      
        </>
    )
}
export default Header;

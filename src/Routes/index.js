import React from 'react'
import Homepage from '../Routes/Landing/index';
import NotFound404 from '../Routes/NotFoundpage/index';
import Work from '../Routes/Work/index';
import AboutMe from '../Routes/About/index'
import RouterService from '../services/RouterService'
import RoutesConfig from '../config/RoutesConfig'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const AppRoutes = () =>{
    return(
        <>
           <BrowserRouter  ref={RouterService.setBrowserHistoryRef}>
                <Switch>
                    <Route exact path={RoutesConfig.LANDING} component={Homepage} />
                    <Route path={RoutesConfig.ABOUT} component={AboutMe} />
                    <Route path={RoutesConfig.WORK} component={Work} />
                    <Route component={NotFound404} />
                </Switch>
           </BrowserRouter>
        </>
    )
}
export default AppRoutes;
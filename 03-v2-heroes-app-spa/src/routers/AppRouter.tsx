import React from "react";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../Screens/login/LoginScreen';
import { DCScreen } from '../Screens/dc/DCScreen';
import { MarvelScreen } from "../Screens/marvel/MarvelScreen";
import { ItemHeroeScreen } from '../Screens/item/ItemHeroeScreen';
import { SearchScreen } from '../Screens/search/SearchScreen';
import { DashboardRoute } from './DashboardRoute';
import { PrivateRoute } from './PrivateRoute';
import { AuthContext } from '../auth/AuthContext';
import { useContext } from "react";
import { PublicRoute } from './PublicRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export const AppRotuer = () => {

    const {authState:{logged}} = useContext(AuthContext);
    // console.log(logged);

    return(
        <Router>
            <div>
                <Switch>
                    {/* Convirtiendo a ruta publica */}
                    {/* <Route exact path="/login" component={LoginScreen} /> */}
                    <PublicRoute isAuthenticated={logged} exact component={LoginScreen} path="/login" />
                    
                    {/* Convirtiendo a ruta privada */}
                    {/* <Route  path="/" component={DashboardRoute}/> */}
                    <PrivateRoute isAuthenticated={logged}  component={DashboardRoute} path="/" />
                </Switch>
            </div>
        </Router>  
    )
}



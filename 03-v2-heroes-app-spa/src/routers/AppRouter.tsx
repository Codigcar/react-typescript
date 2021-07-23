import React, { useContext } from "react";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../Screens/login/LoginScreen';
import { DCScreen } from '../Screens/dc/DCScreen';
import { MarvelScreen } from "../Screens/marvel/MarvelScreen";
import { ItemHeroeScreen } from '../Screens/item/ItemHeroeScreen';
import { SearchScreen } from '../Screens/search/SearchScreen';
import { DashboardRoute } from './DashboardRoute';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

export const AppRotuer = () => {

    return(
        <Router>
            <div>
                <Switch>
                    <Route exact path="/login" component={LoginScreen} />
                    <Route  path="/" component={DashboardRoute}/>
                </Switch>
            </div>
        </Router>  
    )
}



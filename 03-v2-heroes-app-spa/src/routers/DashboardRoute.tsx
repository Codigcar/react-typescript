import React from "react";
import { Navbar } from '../components/ui/Navbar';
import { LoginScreen } from '../Screens/login/LoginScreen';
import { DCScreen } from '../Screens/dc/DCScreen';
import { MarvelScreen } from "../Screens/marvel/MarvelScreen";
import { ItemHeroeScreen } from '../Screens/item/ItemHeroeScreen';
import { SearchScreen } from '../Screens/search/SearchScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    Redirect
  } from "react-router-dom";

export const DashboardRoute = () => {
    return (
        <>
            <Navbar />
            <div>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen}></Route>
                    <Route exact path="/dc" component={DCScreen}></Route>
                    <Route exact path="/dc/:heroeId" component={ItemHeroeScreen}></Route>
                    <Route exact path="/search" component={SearchScreen}></Route>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}



import React, { useEffect } from 'react'
import { LoginScreen } from '../screens/login/LoginScreen';
import { CalendarScreen } from '../screens/calendar/CalendarScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { startCheckingAction } from '../redux/actions/authActions';
import { RootState } from '../helpers/root-state';



export const AppRouter = () => {

    // ver si está autenticado con el token puesto en el LocalStorage
    const dispatch = useDispatch();

    const parteDelSelector_Checking = useSelector((state:RootState) => state.auth.checking);

    useEffect(() => {
        dispatch(startCheckingAction())
    }, [])


    if(parteDelSelector_Checking) {
        return <h5>Espere...</h5>
    }


    return (
       <Router>
           <div>
               <Switch>
                   <Route exact path="/login" component={LoginScreen} />
                   <Route exact path="/" component={CalendarScreen} />
                   <Redirect to="/" />
               </Switch>
           </div>
       </Router>
    )
}



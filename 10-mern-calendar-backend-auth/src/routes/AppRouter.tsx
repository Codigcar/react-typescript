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
import { useDispatch } from 'react-redux';
import { startCheckingAction } from '../redux/actions/authActions';
  

export const AppRouter = () => {

    // ver si está autenticado con el token puesto en el LocalStorage
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(startCheckingAction())
    }, [])

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



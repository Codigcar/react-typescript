import React from 'react'
import { LoginScreen } from '../screens/login/LoginScreen';
import { CalendarScreen } from '../screens/calendar/CalendarScreen';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
  

export const AppRouter = () => {
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



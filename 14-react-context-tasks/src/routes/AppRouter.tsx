import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import { Heading } from '../components/layout/Heading';
import { HomeView } from '../views/HomeView';
import { LoginView } from '../views/LoginView';
import { AddTaskView } from '../views/AddTaskView';
import { ContextProvider } from '../stateManagement/context/GlobalContext';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <ContextProvider>
                    <Heading />
                    <Switch>
                        <Route path="/login" component={LoginView} />
                        <Route path="/" exact component={HomeView} />
                        <Route path="/add" exact component={AddTaskView} />
                    </Switch>
                </ContextProvider>
            </div>
        </Router>
    )
}

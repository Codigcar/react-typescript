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
import { TaskForm } from '../views/TaskForm';

export const AppRouter = () => {
    return (
        <Router>
            <div>
            <Heading />
                <Switch>
                    <Route path="/login" component={LoginView} />
                    <Route path="/" exact component={HomeView} />
                    <Route path="/add" exact component={TaskForm} />
                </Switch>
            </div>
        </Router>
    )
}

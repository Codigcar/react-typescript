import React from 'react'
import { AuthRouter } from './AuthRouter';
import { JournalScreen } from '../components/journal/JournalScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { useEffect } from 'react';
import {firebase} from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useState } from 'react';
export const AppRouter = () => {

    const dispatch = useDispatch();
    const [verificandoSiEstaLogueado, setVerificandoSiEstaLogueado] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if(user?.uid){
                    dispatch( login(user.uid, user.displayName || '') );
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
                setVerificandoSiEstaLogueado(false);
            });

    }, [])

    if(verificandoSiEstaLogueado){
        return (
            <h1>Espere...</h1>
        )
    }

    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/auth" component={AuthRouter} />
                    <Route exact path="/" component={JournalScreen} />
                </Switch>
            </div>
        </Router>
    )
}

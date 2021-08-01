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
import { PrivateRoute } from './PrivateRoute';
export const AppRouter = () => {

    const dispatch = useDispatch();
    const [verificandoSiEstaLogueado, setVerificandoSiEstaLogueado] = useState(true)
    const [estoyLogueado, setEstoyLogueado] = useState(false);

    useEffect(() => {

            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if(user?.uid){
                    dispatch( login(user.uid, user.displayName || '') );
                    setEstoyLogueado(true);
                } else {
                    setEstoyLogueado(false);
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
                    <PrivateRoute isAuthenticated={estoyLogueado} component={JournalScreen} exact path="/"  />
                    {/* <Route exact path="/" component={JournalScreen} /> */}
                </Switch>
            </div>
        </Router>
    )
}

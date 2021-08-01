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
export const AppRouter = () => {

    const dispatch = useDispatch();

    useEffect(() => {

            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if(user?.uid){
                    dispatch( login(user.uid, user.displayName || '') );
                }
            });

    }, [])

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

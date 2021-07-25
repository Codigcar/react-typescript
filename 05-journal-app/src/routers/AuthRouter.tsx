import React from 'react'
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { Switch, Route, Redirect } from 'react-router-dom';

export const AuthRouter = () => {
    return (
        
        <div  className="bg-blue-500 flex justify-center items-center w-screen h-screen">
            <div className="p-5 border bg-white font-bold w-50 rounded text-2xl">
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen} />
                    <Route exact path="/auth/register" component={RegisterScreen} />
                    <Redirect to="/auth/login" />
                </Switch>
            </div>
    </div>
    )
}

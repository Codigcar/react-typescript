import React from "react";
import { Link, NavLink,  useHistory } from "react-router-dom";
import { AuthContext } from '../../auth/AuthContext';
import { useContext } from "react";


//  el {history} no sirve aqui porque este solo es un componente y  
//  no está dentro del router
//  Por ello se tiene que usar un Hook useHistory que te trae el react-router-dom
export const Navbar = (/* {history}:any */) => {

   const {signIn, authState, singOut} = useContext(AuthContext);

   const usehistory = useHistory();
   
   const handleSignOut = () => {
     usehistory.replace('/login');
     singOut();
   }

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
    <Link 
        className="navbar-brand"            
        to="/"
    >
        Asociaciones
    </Link>c

    <div className="navbar-collapse">
        <div className="navbar-nav">

            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/marvel"
            >
                Marvel
            </NavLink>

            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/dc"
            >
                DC
            </NavLink>
            
            <NavLink 
                activeClassName="active"
                className="nav-item nav-link" 
                exact
                to="/search"
            >
                Search
            </NavLink>
        </div>
    </div>

    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
        <ul className="navbar-nav ml-auto">

            <p className="nav-item nav-link text-info">	
                {authState.name}
            </p>

            <button 
                className="nav-item nav-link btn" 
                onClick={handleSignOut}
            >
                Logout
            </button>
        </ul>
    </div>
</nav>
  );
};

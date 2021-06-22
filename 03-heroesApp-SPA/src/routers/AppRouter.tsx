import { Navbar } from "../components/ui/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { DashboardRoute } from "./DashboardRoute";

export const AppRouter = () => {
  return (
    /* Ruta principal porque lleva "Router" */
    <Router>
      <div>
        {/* Permite no mostrar el navbar */}
        <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route path="/" component={DashboardRoute} />
        </Switch>
      </div>
    </Router>
  );
};

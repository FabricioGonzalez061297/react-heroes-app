import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {

    const {user:{logged:isAuthenticated} } = useContext(AuthContext);

    return (
       <Router>
           <div>

                <Switch>
                    <PublicRoutes  isAuthenticated={isAuthenticated}  exact path="/login" component={LoginScreen} />
                    <PrivateRoutes isAuthenticated={isAuthenticated} path="/" component={DashboardRoutes} />
                </Switch>
           </div>
       </Router>
    )
}

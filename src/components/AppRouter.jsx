import React, {useContext} from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import {routes, publicRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if(isLoading) {
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Switch>
                {routes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}

                <Redirect to='/posts'/>
            </Switch>
            :
            <Switch>

                {publicRoutes.map(route =>
                    <Route
                        component={route.component}
                        path={route.path}
                        exact={route.exact}
                        key={route.path}
                    />
                )}

                <Redirect to='/login'/>
            </Switch>

    );
};

export default AppRouter;
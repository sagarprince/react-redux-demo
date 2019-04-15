// Core
import React, { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { IonRouterOutlet } from '@ionic/react';

// Pages
import Dashboard from '../modules/admin/pages/dashboard/Dashboard';
import Products from '../modules/admin/pages/products/Products';
import Posts from '../modules/admin/pages/posts/Posts';

const AppRouter = () => (
    <Fragment>
        <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/products" component={Products} />
            <Route path="/posts" component={Posts} />
        </Switch>
    </Fragment>
);

export default AppRouter;
import React from 'react';
import Products from './Products/Products';
import Services from './Services/Services';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Login from './Login/Login'
import Shipping from './Shipping/Shipping'
import NotFound from './NotFound/NotFound'

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute/PrivateRoute';


const Components = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route exact path="/" >
                        <Products />
                    </Route>
                    <Route path="/Services">
                        <Services />
                    </Route>
                    <PrivateRoute path="/Cart">
                        <Cart />
                    </PrivateRoute>
                    <PrivateRoute path="/Shipping">
                        <Shipping />
                    </PrivateRoute>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Components;
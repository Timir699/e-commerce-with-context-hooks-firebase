import React from 'react';
import Products from './Products/Products';
import Services from './Services/Services';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Login from './Login/Login'
import LogOut from './LogOut/LogOut'
import Shipping from './Shipping/Shipping'
import NotFound from './NotFound/NotFound'

import { BrowserRouter, Switch, Route } from 'react-router-dom';


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
                    <Route path="/Cart">
                        <Cart />
                    </Route>
                    <Route path="/Shipping">
                        <Shipping />
                    </Route>
                    <Route path="/Login">
                        <Login />
                    </Route>
                    <Route path="/LogOut">
                        <LogOut />
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
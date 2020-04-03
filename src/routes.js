import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/servicos" exact component={Services} />
                <Route path="/contato" component={Contact} />
            </Switch>
        </BrowserRouter>
    )
}
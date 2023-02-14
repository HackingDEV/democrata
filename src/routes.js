import React from "react"
import {BrowserRouter, Router, Route} from 'react-router-dom';

import Login from './Paginas/login'
import Cadastrar from "./Paginas/cadastrar"
import Home from "./Paginas/home"
import Contato from "./Paginas/contato"


function Routers(){

    return(
    <BrowserRouter >
        <Router>
            <Route path="/" component={<Login />} />
            <Route path='/cadastrar' component={<Cadastrar />} />
            <Route path='/home' component={<Home />} />
            <Route path="/contato" component={<Contato />} />
        </Router>
    </BrowserRouter >
    );
    
};

export default Routers;
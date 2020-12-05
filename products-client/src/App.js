import React, { Component } from "react";

import Registration from "./components/Registration";
import Login from "./components/Login";
import Home from "./components/Home";
import Product from "./components/Product";
import Menu from "./components/Menu";

import {BrowserRouter,Route} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
    constructor(props){
        super(props);
    }
    
    render() {
        return (  
          <div>
                            
              <BrowserRouter>
                <Menu />               
                  <Route path="/" component={Home} exact />
                  <Route path="/registration" component={Registration} exact />
                  <Route path="/login" component={Login} exact />
                  <Route path="/product/:id" component={Product} exact />   
                  
              </BrowserRouter>  
              
            </div>
        )
    }
}

export default App;
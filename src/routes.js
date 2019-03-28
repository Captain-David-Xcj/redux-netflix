import React from 'react';
import {Route} from "react-router";
//import {createBrowserHistory} from 'history';
import App from "./components/App/App";
import {BrowserRouter, Link} from "react-router-dom";
//import Movies from "./components/Movies/Movies";
//import Movie from "./components/Movie/Movie";
//import Movies from "./components/Movies/Movies";
//import Movie from "./components/Movie/Movie";

//let history=createBrowserHistory()
export default (
    <BrowserRouter>
            <Route path="/" component={App}/>
            <Route exact path="/" render={()=>{return(<Link to="/movies">Click</Link>)}}/>
    </BrowserRouter>
)

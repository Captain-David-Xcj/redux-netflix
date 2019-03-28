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
        <Route exact path="/redux-netflix/build" render={()=>{return(<Link to="/redux-netflix/build/movies">Click</Link>)}}/>
            <Route path="/redux-netflix/build" component={App}/>
    </BrowserRouter>
)

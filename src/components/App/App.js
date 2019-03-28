import React from 'react';
import styles from './app.css';
import {connect} from "react-redux";
import Movies from "../Movies/Movies";
import {Route} from "react-router";
import Movie from "../Movie/Movie";
//import {Link} from "react-router-dom";
//import {Link} from "react-router-dom";

class App extends React.Component{
    render() {
        return(
                <div className={styles.app}>
                    <div className={styles.aa}>
                        <Route path="/movies/:id" component={Movie}/>
                    </div>
                    <Route path="/movies" component={Movies}/>
                </div>
        )
    }
}

export default connect()(App);
import React from 'react';
import styles from './movies.css';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {fetchMoviesActionCreator} from "../../modules/movies";
import movies from "../../movies.json"
//import {Route} from 'react-router'
//import Movie from "../Movie/Movie";

class Movies extends React.Component {
    componentWillMount() {
        this.props.fetchMovies(movies)
    }

    /*componentDidMount() {
       fetch('./movies.json', {method: 'GET'})
         .then((response)=>{
             console.log(response.json())
             return response.json()
         })
         .then((movies)=>{
             console.log(movies)
           //this.props.fetchMovies(movies)
         })
     }*/

    render() {
        const {
            children
        } = this.props

        const {
            movies = []
        } = this.props

        const {
            params = {}
        } = this.props.match

        console.log(this.props)
        console.log(children)
        console.log(movies)
        console.log(params)
        //console.log(movies[0].year)

        return (
            <div className={styles.movies}>
                <div className={params.id ? styles.listHidden : styles.list}>
                    {movies.map((movie, index) => (
                        <Link
                            key={index}
                            to={`/redux-netflix/build/movies/${index + 1}`}>
                            <div
                                className={styles.movie}
                                style={{backgroundImage: `url(/redux-netflix/build/${movie.cover})`}}/>
                        </Link>
                    ))}
                </div>
                {children}
            </div>
        )
    }
}

export default connect(({movies}) => ({
    movies: movies.all
}), {
    fetchMovies: fetchMoviesActionCreator
})(Movies);
import React from 'react';
import {connect} from "react-redux";
import {Link} from 'react-router-dom';
import {fetchMovieActionCreator} from "../../modules/movies";
import styles from './movie.css';
class Movie extends React.Component{
    componentWillMount() {
        //console.log(this.props)
        this.props.fetchMovie(this.props.match.params.id)
    }

    componentWillUpdate(next) {
        if (this.props.match.params.id !== next.match.params.id) {
            this.props.fetchMovie(next.match.params.id)
        }
    }

    render() {
        const {
            movie = {
                starring: []
            }
        } = this.props

        console.log(this.props)

        return (
            <div
                className={styles.movie}
                style={{backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0.625) 100%), url(/${movie.cover})`}}
                >
                <div
                    className={styles.cover}
                    style={{backgroundImage: `url(/${movie.cover})`}} />
                <div className={styles.description}>
                    <div className={styles.title}>{movie.title}</div>
                    <div className={styles.year}>{movie.year}</div>
                    <div className={styles.starring}>
                        {movie.starring.map((actor = {}, index) => (
                            <div
                                key={index}
                                className={styles.actor}>
                                {actor.name}
                            </div>
                        ))}
                    </div>
                </div>
                <Link
                    className={styles.closeButton}
                    to="/redux-netflix/build/movies">
                    ←
                </Link>
            </div>
        )
    }

}

export default connect(({movies}) => ({
    movie: movies.current
}), {
    fetchMovie: fetchMovieActionCreator
})(Movie);
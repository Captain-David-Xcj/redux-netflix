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
            <div  id="fu"
                className="movie"
                >
                <div id="zi"
                    className={styles.cover}
                    style={{backgroundImage: `url(${movie.cover})`,height:'400px',width:'300px'}} />
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
                    to="/movies">
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
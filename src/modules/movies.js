import {handleActions} from 'redux-actions'

const FETCH_MOVIES='movies/FETCH_MOVIES'
const FETCH_MOVIE='movies/FETCH_MOVIE'

const initialState={
    movies:[],
    movie:{}
}

export let fetchMoviesActionCreator= (movies) => ({
        type: FETCH_MOVIES,
        movies
    })

export let fetchMovieActionCreator= (index) => ({
        type: FETCH_MOVIE,
        index
    })

export let reducer= handleActions({
        [FETCH_MOVIES]: (state, action) => ({
            ...state,
            all: action.movies
        }),
        [FETCH_MOVIE]: (state, action) => ({
            ...state,
            current: state.all[action.index - 1]
        })
    }, initialState)
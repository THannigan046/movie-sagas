import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { Card, Grid, Typography } from '@mui/material';

import './MovieList.css'

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(storeInstance => storeInstance.movies);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    const displayDetail = (movieId) => {
        //console.log('in displayDetail');
        dispatch({ type: 'FETCH_DETAILS', payload: movieId })
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                <Grid container spacing={2}>
                    {movies.map(movie => {
                        return (
                            <Grid item >
                                <Card variant="outlined" key={movie.movie_id} sx={{ padding: '36px', backgroundColor: 'lightGray', border: '6px solid black' }} >
                                    <Typography variant='h5'>{movie.title}</Typography>
                                    <img src={movie.poster} alt={movie.title} onClick={() => displayDetail(movie)} />
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </section>
        </main>

    );
}

export default MovieList;
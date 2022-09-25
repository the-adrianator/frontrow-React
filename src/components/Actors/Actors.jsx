import React from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import useStyles from './styles';
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList } from '..';

// use useParams to get the actor's id
// make a new call using redux toolkit query -> get actor details call..
// research tmdb api docs...
// use newly created useGetActorDetails hook yo get actor's info to the component

const Actors = () => {
  const page = 1;
  const {id} = useParams();
  const { data, isFetching, error } = useGetActorDetailsQuery(id);
  const {data: movies} = useGetMoviesByActorIdQuery({id, page});
  const history = useHistory();
  const classes = useStyles();
  if(isFetching) {
    return (
      <Box display='flex' justifyContent='center' alignItems='center'>
        <CircularProgress size='8rem' />
      </Box>
    )
  } else if (error) {
      return (
        <Box display='flex' justifyContent='center' alignItems='center'>
          <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color='primary'>
            Go back
          </Button>
        </Box>
    )
  }
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={5} xl={4}>
          <img 
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
          <Typography variant='h2' gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant='h5' gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant='body1' align='justify' paragraph>
            {data?.biography || 'Sorry this Actor/Actress has no biography yet...'}
          </Typography>
          <Box marginTop='2rem' display='flex' justifyContent='space-around'>
            <Button variant='contained' color='primary' target='_blank' href={`https://www.imdb.com/name/${data?.imdb_id}`}>
              IMDB PAGE
            </Button>
            <Button startIcon={<ArrowBack />} onClick={() => history.goBack()} color='primary'>
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box margin='2rem 0'>
        <Typography variant='h2' gutterBottom align='center'>
          Movies by actor/actress
        </Typography>
        {movies && <MovieList movies={movies} numberOfMovies={12} />}
      </Box>
    </>
  )
}

export default Actors
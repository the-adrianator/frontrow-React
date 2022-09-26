import React, { useState } from 'react';
import { Box, Button, CircularProgress, Grid, Typography } from '@mui/material';
import { useHistory, useParams } from 'react-router-dom';
import { ArrowBack } from '@mui/icons-material';
import useStyles from './styles';
import { useGetActorDetailsQuery, useGetMoviesByActorIdQuery } from '../../services/TMDB';
import { MovieList, Pagination } from '..';

const Actors = () => {
  const [page, setPage] = useState(1);
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
        <Grid item lg={5} xl={4} sx={{display: 'flex', justifyContent: 'center', width: '100%'}}>
          <img 
            className={classes.image}
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data.name}
          />
        </Grid>
        <Grid item lg={7} xl={8} style={{ display: 'flex', justifyContent: 'center',flexDirection: 'column' }}>
          <Box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', textAlign: 'center'}}>
            <Typography variant='h2' gutterBottom>
              {data?.name}
            </Typography>
            <Typography variant='h5' gutterBottom>
              Born: {new Date(data?.birthday).toDateString()}
            </Typography>
          </Box>
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
        <Pagination currentPage={page} setPage={setPage} totalPages={movies?.total_pages} />
      </Box>
    </>
  )
}

export default Actors
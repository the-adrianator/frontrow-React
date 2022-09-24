import React from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../features/auth';
import { Typography, Button, Box } from '@mui/material';
import { ExitToApp } from '@mui/icons-material';

const Profile = () => {
  const {user} = useSelector(userSelector);

  const favoriteMovies = []

  const logOut = () => {
    localStorage.clear();

    window.location.href = '/';
  }

  console.log(user.username);
  return (
    <Box>
      <Box display='flex' justifyContent='space-between'>
        <Typography variant='h4' gutterBottom>My Profile</Typography>
        <Button color='inherit' onClick={logOut}>
          Log Out &nbsp; <ExitToApp />
        </Button>
      </Box>
      {!favoriteMovies.length 
        ? <Typography variant='h5'>Add movies to favorites to see them here!</Typography>
        : (
          <Box>
            FAVORITE MOVIES
          </Box>
        )
      }
    </Box>
  )
}

export default Profile
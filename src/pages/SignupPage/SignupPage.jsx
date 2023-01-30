import * as React from 'react';
import {Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography} from '@mui/material';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import userService from '../../utils/userService';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        Growth
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

function SignUpPage({handleSignUpOrLogin}) {
    const [state, setState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const [error, setError] = useState('')

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
            
                await userService.signup(state);
                handleSignUpOrLogin(); // from app, grts user and sets in app state
                navigate('/')
    
            } catch (err) {
                console.log(err.message, 'error message in SIGNUP')
                setError('CHECK TERMINAL, THERES AN ERROR IN SIGNUP DUMMY')
            }
        // const formData = new FormData();
        // for (let key in state){
        //     formData.append(key, state[key])
        // }
        // console.log(formData.forEach((item => console.log(item))));

        // try {
            
        //     await userService.signup(formData);
        //     handleSignUpOrLogin(); // from app, grts user and sets in app state
        //     navigate('/')

        // } catch (err) {
        //     console.log(err.message, 'error message in SIGNUP')
        //     setError('CHECK TERMINAL, THERES AN ERROR IN SIGNUP DUMMY')
        // }
    }

    function handleChange(e){
        setState({
            ...state,
            [e.target.name]: e.target.value
        })

    }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 12,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: 'success.main' }}>
            <LocalFloristIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 7 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  autoFocus
                  name="firstName"
                  id="firstName"
                  label="First Name"
                  value={state.firstName}
                  onChange={handleChange}
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="lastName"
                  id="lastName"
                  label="Last Name"
                  value={state.lastName}
                  onChange={handleChange}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  id="email"
                  label="Email Address"
                  value={state.email}
                  onChange={handleChange}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  id="password"
                  label="Password"
                  type="password"
                  value={state.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="success"
              sx={{ mt: 4, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8 }} />
        {error ? <ErrorMessage error={error} /> : null}
      </Container>
    </ThemeProvider>
  );
}

export default SignUpPage;
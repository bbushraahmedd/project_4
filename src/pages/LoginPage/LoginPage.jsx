import './LoginPage.css';

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

function LoginPage({handleSignUpOrLogin}) {
    const [error, setError] = useState('')
    const [state, setState] = useState({
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();
        try {
                await userService.login(state);
                handleSignUpOrLogin(); // from app, grts user and sets in app state
                navigate('/')
    
            } catch (err) {
                console.log(err.message, 'error message in SIGNUP')
                setError('CHECK TERMINAL, THERES AN ERROR IN SIGNUP DUMMY')
            }
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
            Log In
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 7 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  id="email"
                  label="Email Address"
                  // value={state.email}
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
                  // value={state.password}
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
              Login
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Create Account
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

export default LoginPage;
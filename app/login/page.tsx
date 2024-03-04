'use client';

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import theme from '../theme';
import { postAPI } from '../../services/apiService';
import { CircularProgress } from '@mui/material';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://sandboxlife.com/">
        Sandboxlife
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.
// const defaultTheme = createTheme();

export default function SignIn() {
  const [form, setForm] = React.useState({ });
  const [loginApiResult, setLoginApiResult] = React.useState({ loading: false, error: null, result: null })
  const handleChange = (event) => {
    event.preventDefault();
    const id = event.target.id
    const value = event.target.value
    const updatedForm = {
      ...form,
      [id] : value
    };
    setForm(updatedForm);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoginApiResult({ ...loginApiResult, loading: true });
    postAPI('/users/login', form).then(result => {
      setLoginApiResult({ ...loginApiResult, loading: false, result });
    }).catch(e => {
      setLoginApiResult({ ...loginApiResult, loading: false, error: e });
      console.log(e, 'error');
    })
  }

  React.useEffect(() => {
    const listener = event => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleSubmit(event);
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [])



  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" color={'#9b1d1e'}>
          Sandboxlife
        </Typography>
        <Typography component="h5" color={'#9b1d1e'}>
          Build your profile
        </Typography>
        
        <Box component="form"
          noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            onChange={handleChange}
            required
            fullWidth
            value={form['email'] || ''}
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            onChange={handleChange}
            value={form['password_hash'] || ''}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password_hash"
            autoComplete="current-password"
          />
          
          {
            loginApiResult.loading ? 
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <CircularProgress />
            </Box> : 
            <Button
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign in
            </Button>
          }
          
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  );
}
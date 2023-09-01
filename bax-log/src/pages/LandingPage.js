import Header from "../components/Header";
import PokerBackground from "../components/black_poker_background.jpg";

import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Carousel from 'react-material-ui-carousel';

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function LandingPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <div>
      <ThemeProvider theme={defaultTheme}>
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
            <Typography component="h1" variant="h5">
              Welcome to BaX-Log
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Session ID"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Your name"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <div style={{ justifyContent: "center" }}>
                <Carousel indicators={false} cycleNavigation={false} swipe={false} autoPlay={false} navButtonsAlwaysVisible>
                  <div style={{ justifyContent: "center", display: "flex" }}>  <h1>Create session</h1> </div>
                  <div style={{ justifyContent: "center", display: "flex" }}>  <h1>Join session</h1> </div>
                </Carousel>
              </div>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <p></p>

          <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            BaX-Log 2023
            {'.'}
          </Typography>
        </Container>
      </ThemeProvider>
    </div >
  );
}

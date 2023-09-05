import React, { useState } from "react";
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
import PokerBackground from "../components/black_poker_background.jpg";
import AppService from '../AppService';

const defaultTheme = createTheme();

export default function LandingPage() {

  const [createClicked, setCreateClicked] = useState(false);
  const [joinClicked, setJoinClicked] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let sessionID = data.get('sessionID');
    let username = data.get('username');
    if (sessionID.includes(' ') || sessionID.length < 6) {
      alert("Session ID must be 6 characters!")
    }
    if (username.includes(' ')) {
      alert("Username cannot include blanks!")
    }
    if (createClicked) {
      console.log(
        "CREATE SESSION", { sessionID, username }
      );

      let newUser = { name: username, pickedCard: "", isPickedCard: "false", isAdmin: "true", sessionID: sessionID };
      let newSession = { sessionID: sessionID, sessionAdmin: username, sessionAdminID: "121121" };
      AppService.createUser(newUser);
      AppService.createSession(newSession);
    }
    else if (joinClicked) {
      console.log(
        "JOIN SESSION", { sessionID, username }
      );
      if (sessionID[0] === 0) {
        let newSessionId = sessionID[1, 6];
        let mySession = AppService.getSessionById(newSessionId);
        console.log(mySession);
      }
      else {
        let mySession = AppService.getSessionById(sessionID);
        console.log(mySession);
      }

    }
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
                id="sessionID"
                label="Session ID"
                name="sessionID"
                autoFocus
                inputProps={{ inputMode: "decimal", pattern: '[0-9]*', maxLength: 6 }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="username"
                label="Your name"
                id="username"
              />

              <div style={{ justifyContent: "center" }}>
                <Carousel indicators={false} cycleNavigation={true} swipe={false} autoPlay={false} navButtonsAlwaysVisible>
                  <div style={{ justifyContent: "center", display: "flex" }}>  <Button
                    onClick={() => { setCreateClicked(true); setJoinClicked(false) }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: 250 }}
                  >
                    Create session
                  </Button> </div>
                  <div style={{ justifyContent: "center", display: "flex" }}>  <Button
                    onClick={() => { setJoinClicked(true); setCreateClicked(false) }}
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, width: 250 }}
                  >
                    Join session
                  </Button> </div>
                </Carousel>
              </div>

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
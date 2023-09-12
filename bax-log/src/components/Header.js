import { Button, Slide, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppToolbar from '@mui/material/Toolbar';
import GithubIcon from '@mui/icons-material/GitHub';
import Typography from '@mui/material/Typography';
import React from 'react';
import './Header.css';
export const title = 'Planning Poker';

export const Header = () => {

  return (
    <Slide direction='down' in={true} timeout={800}>
      <AppBar position='sticky' className='AppBar'>
        <AppToolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            BaX-Log Scrum Poker Application
          </Typography>
          <Button
            id='github-button'
            color='inherit'
            onClick={() =>
              (window.open('https://github.com/kaanadalilar/BaX-Log_Scrum_Poker_App', "_blank"))
            }
          >
            <GithubIcon></GithubIcon>
          </Button>
        </AppToolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;
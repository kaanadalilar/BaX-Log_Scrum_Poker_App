import { Button, Slide, useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import AppToolbar from '@mui/material/Toolbar';
import GithubIcon from '@mui/icons-material/GitHub';
import React from 'react';
import './Header.css';
export const title = 'Planning Poker';

export const Header = () => {

  return (
    <Slide direction='down' in={true} timeout={800}>
      <AppBar position='sticky' className='AppBar'>
        <AppToolbar>
          <div className='HeaderContainer'>
            <div className='HeaderLeftContainer'>
              <Button
                id='github-button'
                color='inherit'
                onClick={() =>
                  (window.location.href = 'https://github.com/kaanadalilar/BaX-Log_Scrum_Poker_App')
                }
              >
                <GithubIcon></GithubIcon>
              </Button>
              <h1 className='HeaderTitle'>{BAX-LOG}</h1>
            </div>
          </div>
        </AppToolbar>
      </AppBar>
    </Slide>
  );
};

export default Header;
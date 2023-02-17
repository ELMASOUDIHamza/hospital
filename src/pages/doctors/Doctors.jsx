import * as React from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Container } from '@mui/system';
import { Grid, Paper, Box, TextField } from '@mui/material';

export default function Doctors() {
  return (
    
    <Grid container  >
        <Paper component={Grid} elevation={24} xs={6} 
          sx={{bgcolor: 'orange',height:'auto', mx: 'auto', my: '50px',py: '50px'}} >
          <Box component={Grid} sx={{ display: 'inline-flex',bgcolor:'#FFFFFF',minWidth:'60%', mx: '20%'}}>
            <InputBase autoFocus multiline 
              fullWidth 
              placeholder="Search doctor"
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton> 
          </Box>          
        </Paper> 

   </Grid>
  );
}
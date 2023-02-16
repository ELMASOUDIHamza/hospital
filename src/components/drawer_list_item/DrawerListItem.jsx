import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';

import MailIcon from '@mui/icons-material/Mail';
import React from 'react';
import { Link } from 'react-router-dom';

const DrawerListItem = (props) => {
    const linkDecor = { textDecoration: "none", color: props.color }
    
    return (
        
        <ListItem disablePadding textColor ={props.color} >
        <Link to={props.link} onClick={props.action} textColor="red" style={linkDecor} >   
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
        <ListItemText primary={props.title} />    
          </ListItemButton>
        </Link> 
   </ListItem>
    );
}

export default DrawerListItem;

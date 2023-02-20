import { React, useEffect, useState } from 'react';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import { Container } from '@mui/system';
import { Grid, Paper, Box, TextField, Typography } from '@mui/material';

export default function Doctors() {

   const students = ['Hamza','Meyem','Karim','Youssra']; 
   let result = [];
  const [search, setSearch] = useState("");
  const [valNull, setValNull] = useState(true)
  const getStudents = () => {
    return students.map((s) => {
      return <Typography align='center' variant='h6'>{s}</Typography>
    })
  }
 //   const searchResult = () => {
     /* students.forEach(std => {
        //const student = std.toLowerCase();
        if(std.includes(search)){
          return <Typography variant='h3'>{std}</Typography>
        }
      });*/
      let i = 0;
      const detectItems = (result) => {
        students.forEach(std => {
            if(std.includes(search)) {
                console.log(`Before filter : ${std}`)
                result[i] = std ;
                console.log(`Result is : ${result[i]}`)
                i++;
                return result
             }
        });

/*       students.filter((std)=> {

      }
        })*/
      
    }


  return (
    
    <Grid container  >
        <Paper component={Grid} elevation={24} xs={6} 
          sx={{bgcolor: 'orange',height:'auto', mx: 'auto', my: '50px',py: '50px'}} >
          <Box component={Grid} sx={{ display: 'inline-flex',bgcolor:'#FFFFFF',minWidth:'60%', mx: '20%'}}>
            <InputBase autoFocus multiline fullWidth placeholder="Search doctor"
                onChange={(e) => {
                  setSearch(e.target.value)
                  console.log("Le contenu est : "+search)
                  //search === "" ? setValNull(false) : "";
                } } 
            />
            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton> 


          </Box>   
          <Box>

           {
                  students.filter((stud)=> {
                    return search === "" ? stud : stud.toLowerCase().includes(search.toLowerCase())
                }).map((stud) => <Typography align='center' variant='h4'>{stud}</Typography>) 
              }
           </Box>
   
        </Paper> 


   </Grid>
  );
}
import React from "react";
import { Box, IconButton, List,Toolbar, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import AddIcon from '@mui/icons-material/Add';

import styled from "@emotion/styled";
import RightsideList from "./RightsideList";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  
});



function Rightside() {
  return (
    <Box flex={2} paddingTop={10} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        <StyledToolbar>
          <Typography marginRight={20}  color="RGB(101, 103, 107)" fontSize='17px' fontWeight='600' >Contact</Typography>

          <IconButton size="large" aria-label="search" color="inherit" title="Search by name or group">
            <SearchIcon  />
          </IconButton>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
            title="option"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>


        <Box >
      <hr />
      < List>


   
       <RightsideList name = 'Hardik Raval'  img = 'https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg' />
    
       <RightsideList name = 'Arpan Raval'  img = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSmJl1hZnA27vlQcSAXs7nrrd6x5yv08lJqJWgV7n-A&s' />
    
       <RightsideList name = 'Nishant Parmar'  img ='https://www.iwmbuzz.com/wp-content/uploads/2019/11/heres-why-hrithik-roshan-is-the-greek-god-of-bollywood-920x518.jpg' />
    
       <RightsideList name = 'Sharvan Makwana'  img = 'https://i.ndtvimg.com/i/2017-11/shikhar-dhawan_650x400_81509546556.jpg' />
       <RightsideList name = 'Suresh Gohel'  img = 'https://i.pinimg.com/736x/b9/92/2e/b9922e62417b3db8c21acdea6bd76c69.jpg' />
    

     
       
          
       
      

        
      </List>
         <Box>

          <Typography marginTop={5} color="RGB(101, 103, 107)" fontSize='17px' fontWeight='600' >
          Group conversations
            </Typography>

            <List sx={{ display:'flex', margin:'10px',bgcolor:'silver', paddingTop:'10px', paddingBottom:'10px', paddingLeft:'5px', cursor:'pointer', borderRadius:'5px' }} >
            
            <AddIcon />
            <Typography marginLeft={2}>Create New Group</Typography>

            </List>
         </Box>

    </Box>

      </Box>
    </Box>
  );
}

export default Rightside;

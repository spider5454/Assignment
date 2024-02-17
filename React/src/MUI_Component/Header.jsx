import React from "react";

import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography} from "@mui/material";
import styled from "@emotion/styled";
import { Mail, Notifications } from "@mui/icons-material";

import FacebookIcon from '@mui/icons-material/Facebook';
   const StyledToolbar = styled(Toolbar)({
    display:"flex",
    justifyContent:"space-between"
  });


   const Search = styled('div')(({ theme }) => ({
    backgroundColor:"white",
    padding:"0px 10px ",
    width:"30%",
    borderRadius:'5px'
  }));
   const Icons = styled(Box)(({ theme }) => ({
    display:'flex',
    alignItems:'center',
    gap:'20px'
   
  }));
 
 


function Header() {


  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" >
          <StyledToolbar >
            <Typography variant="h6"  sx={{ display: { xs: 'none', sm: 'block' } }}> FaceBook </Typography>
            <Typography variant="h6"  sx={{ display: { xs: 'Block', sm: 'none' } }} marginTop={1}> <FacebookIcon width={30}  /> </Typography>

             <Search ><InputBase placeholder="Search..."> </InputBase></Search>
             
             <Icons>
               <Badge badgeContent={4} color="error" title="inbox" sx={{ display: { cursor:'pointer' } }}  >
                <Mail />
               </Badge>


               <Badge badgeContent={2} color="error" title="notification" sx={{ display: { cursor:'pointer' }}} >
                <Notifications/>
               </Badge>

               <Avatar title='Profile' alt="P" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZp7McOfnmlYxECNrbrwiMV8qntiP3tMBWV_jq8kViFA&s' img='https://images.alphacoders.com/121/1216959.jpg" sx={{ display: { cursor:'pointer' }}} />
            
            </Icons>
             

              
          </StyledToolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Header;

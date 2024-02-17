import React  from 'react'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Group, Home, Pages, Settings } from "@mui/icons-material";
import PersonIcon from '@mui/icons-material/Person';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StorefrontIcon from '@mui/icons-material/Storefront';

function Side() {
  return (
    <Box flex={1} paddingTop={10} sx={{display:{xs:"none", sm:"block",}}}>

      <Box position={'fixed'}>

        <List >
          <ListItem disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <Home></Home>
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
               <Pages></Pages>
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Group></Group>
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                < StorefrontIcon/>
              </ListItemIcon>
              <ListItemText primary="Marketing" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
            < PersonIcon/>
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Settings></Settings>
              </ListItemIcon>
              <ListItemText primary="Setings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
              <AccountBoxIcon/>
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>


          
        </List>
      </Box>
      
    </Box>
  )
}

export default Side

import React from 'react'
import { Avatar, ListItem, Typography } from "@mui/material";


function RightsideList( { img, name }) {
  return (
    <div>
         
         <ListItem>
        <Avatar src={img}/>
          <Typography marginLeft={3}>
            {name}
          </Typography>
        </ListItem>



  
           
    



    </div>
  )
}

export default RightsideList

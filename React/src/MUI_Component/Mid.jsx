import { Box } from "@mui/material";


import React from 'react'
import Multi_Post from "./Multi_Post";


function Mid() {
  return (
    <Box  flex={4} p={2} marginTop={10} >
    
    
      <Multi_Post name='Pankaj Makwana' profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZp7McOfnmlYxECNrbrwiMV8qntiP3tMBWV_jq8kViFA&s' img='https://images.alphacoders.com/121/1216959.jpg'/>
      <Multi_Post  name='Hardik Raval' profile='https://img.freepik.com/free-photo/freedom-concept-with-hiker-mountain_23-2148107064.jpg' img='https://wallpapercave.com/wp/wp4504624.jpg'/>
      <Multi_Post  name='Arpan Raval' profile='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaSmJl1hZnA27vlQcSAXs7nrrd6x5yv08lJqJWgV7n-A&s' img='https://wallpaperaccess.com/full/5686615.jpg'/>
      <Multi_Post  name='Nishant Parmar' profile='https://www.iwmbuzz.com/wp-content/uploads/2019/11/heres-why-hrithik-roshan-is-the-greek-god-of-bollywood-920x518.jpg' img='https://wallpapers.com/images/featured/pubg-hd-a8lzrpdzi7ffija2.jpg'/>
      <Multi_Post  name='Sharvan Makwana' profile='https://i.ndtvimg.com/i/2017-11/shikhar-dhawan_650x400_81509546556.jpg' img='https://c4.wallpaperflare.com/wallpaper/987/926/492/shikhar-dhawan-men-s-blue-india-polo-short-wallpaper-preview.jpg'/>



    </Box>
  );
}

export default Mid;

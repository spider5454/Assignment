import React from 'react'

import {
    Avatar,
    Card,
    CardContent,
    CardHeader,
    CardMedia,
    Checkbox,
    IconButton,
    Typography,
  } from "@mui/material";
  import {  red } from "@mui/material/colors";
  import MoreVertIcon from "@mui/icons-material/MoreVert";
  import ShareIcon from "@mui/icons-material/Share";
  import { Favorite, FavoriteBorder } from "@mui/icons-material";
function Multi_Post({img, profile, name}) {
  return (
    <div>
      <Card sx={{ maxWidth: 845 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={profile}>
              
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={name}
          subheader="September 14, 2016"
        />

        <CardMedia
          component="img"
          height="20%"
          image={img}
          alt="Spider-Man"
        />

        <CardContent>
          <Typography variant="body2" color="text.secondary">
            With amazing spider-like abilities, teenage science whiz Peter
            Parker fights crime and dreams of becoming an Avenger as Spider-Man.
          </Typography>
        </CardContent>

        <IconButton aria-label="add to favotites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </Card>
  
  
    </div>
  )
}

export default Multi_Post

import React, {useState} from 'react'
import { Button } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function Mui() {
    
    const [color ,setColor] = useState('primary')
  function changeColor(){
       setColor('secondary')
  }

  return (
    <div>

        <Button color={color} variant='contained' onClick={()=>{changeColor()}} startIcon={<DeleteIcon/>} >Click Me</Button>
    
    </div>
  )
}

export default Mui

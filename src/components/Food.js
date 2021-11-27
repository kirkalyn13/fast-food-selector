import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { deleteDoc, doc } from '@firebase/firestore'
import { db } from '../firebase'

const cardStyle = {
    display: "flex",
    backgroundColor: '#FFECB3', 
    color: '#000', 
    fontWeight:"bolder", 
    justifyContent:"space-between",
    margin: "10px",
}

const Task = ({food, id}) => {
    const deleteFood = async (id) => {
        const foodDoc = doc(db, "food", id)
        await deleteDoc(foodDoc)
        alert(`Deleted ${food}.`)
    }

    return (
        <Card sx={{ minWidth: 275 }}
        style={cardStyle}>
            <CardContent>
                <Typography variant="h5" component="div">
                {food}
                </Typography>
            </CardContent>
            <IconButton aria-label="delete" onClick={() => {deleteFood(id)}}>
                <DeleteIcon />
            </IconButton>
        </Card>
    )
}

export default Task

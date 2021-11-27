import React, {useContext} from 'react'
import { FoodsContext, foodsCollectionRef } from '../routes/Dashboard'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import AddCircleIcon from '@mui/icons-material/AddCircle'
import { addDoc } from '@firebase/firestore'

const addStyle = {
    backgroundColor: '#FFC107', 
    color: '#000',
    fontWeight:"bold", 
    width: "200px",
    margin:"10px 80px"
}

const inputStyle = {
    margin:"10px 20px",
    color: '#000',
    fontWeight:"bold",
    backgroundColor: '#FFF'  
}

const AddFood = () => {
    const {newFood, setNewFood } = useContext(FoodsContext)

    const addFood = async () => {
        await addDoc(foodsCollectionRef, {name: newFood})
        alert(`Added ${newFood}.`)
        setNewFood("")
    }

    return (
        <div className="container-add-food">
            <h3>Add New Fast Food: </h3>
            <TextField label="Enter Fast Food" style={inputStyle} variant="filled" value={newFood}
                onChange={e => setNewFood(e.target.value)}/>
            <Button variant="contained" onClick={addFood} style={addStyle} startIcon={<AddCircleIcon />}>
                    ADD FAST FOOD
            </Button>
        </div>
    )
}

export default AddFood

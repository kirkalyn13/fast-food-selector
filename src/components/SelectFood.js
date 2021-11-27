import React, { useState, useContext} from 'react'
import { FoodsContext } from '../routes/Dashboard'
import { Button } from '@mui/material'
import FastfoodIcon from '@mui/icons-material/Fastfood'

const selectStyle = {
    backgroundColor: '#FFC107', 
    color: '#000',
    fontWeight:"bold", 
    margin:"10px 5px 10px 10px"
}

const SelectFood = () => {
    const [ selected, setSelected ] = useState('')
    const { foods } = useContext(FoodsContext)
    const selectFood = () => {
        setSelected(foods[Math.floor(Math.random() * foods.length)].name)
    }
    return (
        <div>
            {selected === '' ? null : <h3>You have chosen: </h3>}
           <h1>{selected === '' ? "Randomize Fast Food!" : selected}</h1> 
           <Button variant="contained"
                style={selectStyle}
                onClick={selectFood} startIcon={<FastfoodIcon />}>
                    SELECT FAST FOOD
            </Button>
        </div>
    )
}

export default SelectFood

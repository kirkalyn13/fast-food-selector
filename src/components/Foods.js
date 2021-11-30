import { useContext } from 'react'
import { FoodsContext } from '../routes/Dashboard'
import Food from './Food'
import CircularProgress from '@mui/material/CircularProgress'

const Foods = () => {
    const { foods, loading} = useContext(FoodsContext)
    
    return (
        <div className="container-foods">
            <h2 className="header-food-list">Your Food List:</h2>
            {foods.map(food => {
                return(
                    <Food key={food.id} food={food.name} id={food.id}/>
                )
            })}
            {loading === true ? <div className="container-loading"><CircularProgress color="inherit"/></div> : null}
        </div>
    )
}

export default Foods

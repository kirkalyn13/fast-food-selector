import { useContext } from 'react'
import { FoodsContext } from '../routes/Dashboard'
import Food from './Food'

const Foods = () => {
    const { foods } = useContext(FoodsContext)
    
    return (
        <div className="container-foods">
            <h2 className="header-food-list">Your Food List:</h2>
            {foods.map(food => {
                return(
                    <Food key={food.id} food={food.name} id={food.id}/>
                )
            })}
        </div>
    )
}

export default Foods

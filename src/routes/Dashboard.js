import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { collection, getDocs } from '@firebase/firestore'
import Header from '../components/Header'
import Options from '../components/Options'
import Footer from '../components/Footer'
import Foods from '../components/Foods'

export const FoodsContext = React.createContext()
export const foodsCollectionRef = collection(db, "food")

const Dashboard = () => {
    const [ foods, setFoods ] = useState([])
    const [ newFood, setNewFood ] = useState('')

    const getFoods = async () => {
        try{
            const data = await getDocs(foodsCollectionRef)
            setFoods(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }catch(err){
            alert(err)
        }
    }

    useEffect(() => {
        getFoods()
        console.log(foods)
    },[foods])

    return (
        <FoodsContext.Provider value={{foods,newFood,setNewFood}}>
            <Header />
            <div className="dashboard-body">
                <Options />
                <Foods />
            </div>
            <Footer />
        </FoodsContext.Provider>
    )
}

export default Dashboard

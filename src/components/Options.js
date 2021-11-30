import React from 'react'
import SelectFood from './SelectFood'
import AddFood from './AddFood'
import Image from './Image'

const Options = () => {
    return (
        <div className="container-options">
            <SelectFood />
            <AddFood />
            <Image />
        </div>
    )
}

export default Options

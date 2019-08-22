import React from 'react'
import classes from './Shop.css'
import Equipments from './Equipments/Equipments'
import Cost from './Cost/Cost'

const Shop = props => {
    return (
        <div className={classes.Shop}>
            <h1>Shop</h1>
            <Equipments
                equipmentList = {props.equipmentList}
                onChange = {props.onChange}
            />
            <hr/>
            <Cost
                totalCost = {props.totalCost}
            />
        </div>        
    )
}

export default Shop

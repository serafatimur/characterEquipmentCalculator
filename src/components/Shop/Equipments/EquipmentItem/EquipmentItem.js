import React from 'react'
import classes from './EquipmentItem.css'
import EquipmentOption from './EquipmentOption/EquipmentOption'

const EquipmentItem = props => {
    return(
        <div className={classes.EquipmentItem}>
            <p>{props.equipmentName}</p>
            <select 
                name = {props.equipmentName}
                onChange = {props.onChange}
            >
                <option value="-1"></option>
                {props.equipmentOptions.map((option, index) => {
                    return (
                        <EquipmentOption
                            key = {index}
                            option = {option}
                        />
                    )
                })}
            </select>
        </div>
    )
}

export default EquipmentItem;
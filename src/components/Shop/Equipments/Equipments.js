import React from 'react'
import classes from './Equipments.css'
import EquipmentItem from './EquipmentItem/EquipmentItem'

const Equipments = props => {
    return (
        <div className={classes.Equipments}>
            {Object.keys(props.equipmentList).map((equipmentName, index) => {
                return(
                    <EquipmentItem
                        key = {index}
                        equipmentOptions = {props.equipmentList[equipmentName]}
                        equipmentName = {equipmentName}
                        onChange = {props.onChange}
                    />
                )
            })}
        </div>
    )
}

export default Equipments;
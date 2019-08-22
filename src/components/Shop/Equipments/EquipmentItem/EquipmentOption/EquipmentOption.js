import React from 'react'
import classes from './EquipmentOption.css'

const EquipmentOption = props => {
    return (
        <option
            value={props.option.id}
            className={classes.EquipmentOption}
        >{props.option.name}</option>
    )
}

export default EquipmentOption;
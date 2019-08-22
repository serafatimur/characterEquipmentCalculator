import React from 'react'
import classes from './Cost.css'

const Cost = props => {
    return(
        <div className={classes.Cost}>
            <p>Equipment cost: {props.totalCost}</p>
        </div>
    )
}

export default Cost
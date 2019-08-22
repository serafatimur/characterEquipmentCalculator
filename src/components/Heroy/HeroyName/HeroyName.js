import React from 'react'
import classes from './HeroyName.css'

const HeroyName = props => {
    return (
        <div className={classes.HeroyName}>
            <p>Name:</p>
            <p>{props.heroyName}</p>
        </div>
    )
}

export default HeroyName
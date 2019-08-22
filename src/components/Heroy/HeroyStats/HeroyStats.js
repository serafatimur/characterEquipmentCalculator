import React from 'react'
import classes from './HeroyStats.css'

const HeroyStats = props => {
    return (
        <div className = {classes.HeroyStats}>
            <p>Stats:</p>
            <div className={classes.Stats}>
                <p>{props.health} <img className = {classes.Heart} src="heart.png" alt="heart"/></p>
                <p>{props.armor} <img className = {classes.Shield} src="shield.png" alt="shield"/></p>
                <p>{props.attack} <img className = {classes.Sword} src="sword.png" alt="sword"/> </p>
            </div>
        </div>
    )
}

export default HeroyStats
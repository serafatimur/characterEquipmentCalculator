import React from 'react'
import classes from './Heroy.css'
import HeroyImage from './HeroyImage/HeroyImage'
import HeroyName from './HeroyName/HeroyName'
import HeroyStats from './HeroyStats/HeroyStats'

const Heroy = props => {
    return(
        <div className={classes.Heroy}>
            <HeroyImage
                imgSrc = {props.heroy.img}
                imgAltSrc = {props.heroy["alt-img"]}
                isHelmet = {props.isHelmet}
                links = {props.links}
            />
            <HeroyName
                heroyName = {props.heroy.name}
            />
            <HeroyStats
                health = {props.stats.health}
                attack = {props.stats.attack}
                armor = {props.stats.armor}
            />
        </div>
    )
}

export default Heroy;
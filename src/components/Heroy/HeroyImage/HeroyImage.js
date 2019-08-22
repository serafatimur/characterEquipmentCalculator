import React from 'react'
import classes from './HeroyImage.css'
import EquipmentsImage from './EquipmentsImage/EquipmentsIamge'

const HeroyImage = props => {
    return(
        <div className={classes.HeroyImage}>
            <img
                src = {!props.isHelmet ? props.imgSrc : props.imgAltSrc}
                alt="EmptyHeroy"
            />
            <EquipmentsImage
                links = {props.links}
            />
        </div>
    )
}

export default HeroyImage
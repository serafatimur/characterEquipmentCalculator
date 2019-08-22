import React from 'react';
import classes from './EquipmentsImage.css'

const EquipmentsIamge = props => {
    return (
        <div className= {classes.EquipmentsImage}>
            <img
                className={classes.Helmet}
                alt="helmet"
                src = {props.links.helmets}
                style={props.links.helmets ?{display:"block"}:{ display:"none"}}
            />
            <img 
                className={classes.Chest}
                alt="chest"
                src = {props.links.chests}
                style={props.links.chests ?{display:"block"}:{ display:"none"}}
            />
            <img 
                className={classes.Gloves} 
                alt="gloves" 
                src = {props.links.gloves}
                style={props.links.gloves ?{display:"block"}:{ display:"none"}}
            />
            <img 
                className={classes.Boots} 
                alt="boots" 
                src = {props.links.boots}
                style={props.links.boots ?{display:"block"}:{ display:"none"}}
            />
            <img 
                className={classes.Sword} 
                alt="sword" 
                src = {props.links.swords} 
                style={props.links.swords ?{display:"block"}:{ display:"none"}}
            />
        </div>
    )
}

export default EquipmentsIamge;
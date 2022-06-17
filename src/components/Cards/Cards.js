import React from "react";
import classes from './Cards.module.scss';


const Cards = (props) => {
 return (
   
       <div className={classes.Cards}>
        <img className={classes.Cards__img} src={props.url}/>
        <p className={classes.Cards__name}>{props.title}</p>
       </div>

    
 );
};


export default Cards;
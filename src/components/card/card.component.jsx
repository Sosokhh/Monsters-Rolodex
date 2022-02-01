import React from "react";
import './card.styles.css';

export const Card = (props) => (
    <div className="card-container">
    <img alt='monster' src = {`https://robohash.org/${props.monster.id}?set=set2`} />
    
        <h2>{props.monster.name}</h2>
        <p> <b>Email: </b> {props.monster.email}</p>
        <p> <b>Username:</b> {props.monster.username}</p>
    </div>
);
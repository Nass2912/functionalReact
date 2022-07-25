import React from "react";
import "./card.style.css"

export const Card = (props) => (
    <div className="card">
        <img alt = "monster" src = {`https://avatars.dicebear.com/api/avataaars/${props.monster.username}.svg`}></img>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>
)
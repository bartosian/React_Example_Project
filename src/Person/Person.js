import React from "react";
import "./Person.css";

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.click}>Hi, I'm person and my name is { props.name }!</p>
            <p>{props.children}</p>
            <input 
            onChange={props.change}
            value = {props.name}
            type="text"/>
        </div>
    )
}

export default person;
import React from "react";

const person = (props) => {
    return (
        <div>
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
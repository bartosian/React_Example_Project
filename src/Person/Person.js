import React from "react";

const person = (props) => {
    return (
        <div>
            <p>Hi, I'm person and my name is { props.name }!</p>
            <p>{props.children}</p>
        </div>
    )
}

export default person;
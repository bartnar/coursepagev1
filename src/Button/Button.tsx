import React from "react";
import ListItem from "../ListItem/ListItem";
import "./Button.css";

interface ButtonInterface {
    title?: string | JSX.Element,
    icon?: string | JSX.Element
}

export default function Button(props: ButtonInterface) {
    return (
        <button className="button">
            <ListItem icon={props.icon} title={props.title}/>
        </button>
    )
}
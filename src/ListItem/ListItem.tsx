import React from "react";
import {Link} from "react-router-dom";

interface ListItemInterface {
    title?: string | React.ReactChildren | JSX.Element | JSX.Element[],
    secondaryTitle?: string | React.ReactChildren | JSX.Element | JSX.Element[],
    icon?: string | React.ReactChildren | JSX.Element,
    action?: string | React.ReactChildren | JSX.Element | JSX.Element[],
    to?: string,
    clickable?: boolean,
    badge?: JSX.Element,
}

export default function ListItem(props: ListItemInterface) {
    return (
        <li>
            <Link to={`/${props.to || ''}`} className={props.clickable ? 'list-item-clickable' : 'list-item'}>
                <div className="list-item-icon-wrapper">
                    <span className="list-item-icon">{props.icon}</span>
                    {props.badge}
                </div>

                <div className="list-item-text-wrapper">
                    <h3 className="list-item-title">{props.title}</h3>
                    <h4 className="list-item-title-secondary">{props.secondaryTitle}</h4>
                </div>
                <span className="list-item-action">{props.action}</span>
            </Link>
        </li>
    )
}

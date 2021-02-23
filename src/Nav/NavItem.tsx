import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function NavItem(props: any) {
    const [active, setActive] = useState(false);
    return (
        <li>
            <span>{`${props.icon ? props.icon : ``}`}</span>
            <Link to={`/${props.to || ``}`} className={`nav-link${active ? `active` : ``}`}
                  onClick={() => setActive(!active)}
            >{props.item}
            </Link>
        </li>
    )
}
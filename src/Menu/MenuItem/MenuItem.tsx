import React, {useState} from "react";
import {Link} from "react-router-dom";

export default function MenuItem(props: any) {
    const [active, setActive] = useState(false);
    return(
        <li>
            <span className={`${props.icon}${active ? `-active` : ``}`}></span>
            <Link to={`/${props.to || ``}`} className={`menu-link${active ? `active` : ``}`}
                  onClick={() => setActive(!active)}
            >{props.item}
            </Link>
        </li>
    )
}
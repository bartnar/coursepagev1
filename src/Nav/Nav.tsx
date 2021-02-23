import React from "react";

export default function Nav(props: any) {
    return (
        <nav>
            <ul className="nav-links">
                {props.children}
            </ul>
        </nav>
    )
}
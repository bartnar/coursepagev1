import React from "react";
import ListItem from "../ListItem/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faSearch, faUser} from "@fortawesome/free-solid-svg-icons";

const members = [
    {
        name: "Ron Bush",
        avatar: faUser,
        replyIcon: faEnvelope
    },
    {
        name: "Samuel Piedra",
        avatar: faUser,
        replyIcon: faEnvelope
    },
    {
        name: "Nathan Rodgers",
        avatar: faUser,
        replyIcon: faEnvelope
    },
    {
        name: "Josh Schoen",
        avatar: faUser,
        replyIcon: faEnvelope
    }
]

export default function Members() {
    return (
        <div className="members">
            <ListItem title="Members(32)" action={<FontAwesomeIcon icon={faSearch} size="lg"/>}/>
            <ul className="members-people-wrapper">
                {members.map(member => {
                    return (
                        <ListItem title={member.name} icon={<FontAwesomeIcon icon={member.avatar} size="2x"/>}
                                  action={<FontAwesomeIcon icon={member.replyIcon}/>}/>
                    )
                })}
            </ul>
        </div>

    )

}
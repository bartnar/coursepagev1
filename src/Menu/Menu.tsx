import React from "react";
import ListItem from "../ListItem/ListItem";
import Members from "../Members/Members";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBook,
    faCommentsDollar,
    faEnvelopeOpenText,
    faHouseUser,
    faUserFriends
} from "@fortawesome/free-solid-svg-icons";

export default function Menu() {
    return (
        <div className="margin-content">
            <div className="menu-left-wrapper">
                <div className="menu-left">
                    <ListItem clickable={true} title="Everything"
                              icon={<FontAwesomeIcon icon={faHouseUser} size="2x"/>}/>
                    <ListItem clickable={true} title="Accountability Group"
                              icon={<FontAwesomeIcon icon={faUserFriends} size="2x"/>}
                              action="+2"/>
                    <ListItem clickable={true} title="All Discussions"
                              icon={<FontAwesomeIcon icon={faCommentsDollar} size="2x"/>}/>
                    <ListItem clickable={true} title="Messages"
                              icon={<FontAwesomeIcon icon={faEnvelopeOpenText} size="2x"/>}
                              action="+1"/>
                    <ListItem clickable={true} title="My Activity" icon={<FontAwesomeIcon icon={faBook} size="2x"/>}/>
                </div>
                <Members/>
                <ListItem clickable={true} secondaryTitle="See All"/>
            </div>
        </div>

    )
}
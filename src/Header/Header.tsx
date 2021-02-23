import React from "react";
import Nav from "../Nav/Nav";
import {HeaderNavigationData} from "../data/data";
import ListItem from "../ListItem/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChalkboardTeacher, faChevronDown, faSignOutAlt, faUser ,faBookmark ,faSignal, faComments} from "@fortawesome/free-solid-svg-icons";
import Badge from "../Badge/Badge";


export default function Header() {
    return (
        <div className="margin-content">
            <header className="header">
                <div className="header-logo">
                    {HeaderNavigationData.headerLogo}
                </div>
                <div className="header-dropdown">Starters</div>
                <Nav>
                    <ListItem badge={<Badge value={2} warning circle/>} clickable title="Progress" to="progress"
                              icon={<FontAwesomeIcon icon={faChalkboardTeacher} size="2x"/>}/>
                    <ListItem badge={<Badge value={6} warning circle/>} clickable title="What's New" to="whatsnew"
                              icon={<FontAwesomeIcon icon={faBookmark} size="2x"/>}/>
                    <ListItem clickable title="Stats" to="stats"
                              icon={<FontAwesomeIcon icon={faSignal} size="2x"/>}/>
                    <ListItem clickable title="Community" to="community"
                              icon={<FontAwesomeIcon icon={faComments} size="2x"/>}/>
                </Nav>
                <ListItem secondaryTitle="30%" icon={<FontAwesomeIcon icon={faSignOutAlt} size="2x"/>}/>
                <ListItem clickable icon={<FontAwesomeIcon icon={faUser} size="2x"/>}
                          secondaryTitle={<FontAwesomeIcon icon={faChevronDown} size="lg"/>}/>
            </header>
        </div>

    )
}
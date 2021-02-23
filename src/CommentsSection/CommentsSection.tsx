import React from "react";
import ListItem from "../ListItem/ListItem";
import "./CommentsSection.css";

const commentsSectionTitleAction = ['RECENT', 'BY MILESTONE'];

export default function CommentsSection(props: any) {
    return (
        <div className="comments-section">
            <ListItem title="My Accountability Group" action={commentsSectionTitleAction.map((element) => {
                return (
                    <span className="list-item-title-secondary">{element}</span>
                )
            })}/>
            {props.children}
        </div>
    )
}
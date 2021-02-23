import React from "react";
import ListItem from "../ListItem/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUser} from "@fortawesome/free-solid-svg-icons";
import Button from "../Button/Button";

const asideComments = [
    {
        author: "Ron Bush",
        state: "5 steps ahead of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    },
    {
        author: "Ron Куст",
        state: "5 steps ahead of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    },
    {
        author: "Ron Bush",
        state: "5 steps ahead of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    },
    {
        author: "Ron Bush",
        state: "5 steps ahead of you",
        comment: {
            text: "Happy to help if you feel stuck or need a hint. I'll make sure to reply back within 24 hrs.",
            buttonTitle: "Reach out to Ron"
        }
    }
]

export default function AsideBlock() {
    return (
        <div className="margin-content">
            <div className="aside">
                <ListItem title='One Step Ahead of You' secondaryTitle="Ask them how they did it..."/>
                <div className="aside-comments-wrapper">
                    {asideComments.map((comment) => {
                        return (
                            <div className="aside-comment-wrapper">
                                <ListItem icon={<FontAwesomeIcon icon={faUser}/>}
                                          title={comment.author}
                                          secondaryTitle={comment.state}/>
                                <div className="aside-comment">
                                    <span>{comment.comment.text}</span>
                                    <Button title={comment.comment.buttonTitle}
                                            icon={<FontAwesomeIcon icon={faEnvelope} size="lg"/>}/>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}
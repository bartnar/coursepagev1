import React from "react";
import Button from "../Button/Button";
import ListItem from "../ListItem/ListItem";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComment, faThumbsUp, faUser} from "@fortawesome/free-solid-svg-icons";
import "./Post.css";

const postHeaderSecondaryTitle = ['James Dilon', 'in', 'Top Ads Copied By Hand'];
const postText = "Well it's 2021 and new tools have come out and the good old ones have stayed. Since I've decided to start a small freelancer company, what are some tools ever..."
const postActions = {
    likes: '3',
    comments: '5'
};
const postMessage = [
    {
        author: 'Lyo Mann',
        text: 'Google calendar is very helpful',
        actions: ['Reply', 'Helpful', '2m']
    },
    {
        author: 'Fouad Shariff',
        text: 'I use Trello for tasks',
        actions: ['Reply', 'Helpful', '2m']
    },
    {
        author: 'Kevin Kucera (Teacher)',
        text: 'Gmail + Calendar',
        actions: ['Reply', 'Helpful', '2m']
    }
]

export default function Post() {
    return (
        <div className="post-wrapper">
            <div className="post-header">
                <ListItem action="7h ago" icon={<FontAwesomeIcon icon={faUser} size="2x"/>}
                          title="What are some tools every startup should have?" secondaryTitle={
                    postHeaderSecondaryTitle.map((element) => {
                        return (
                            <span className="list-item-title-secondary">{element}</span>
                        )
                    })
                }/>
            </div>
            <div className="post-text">{postText}</div>
            <div className="post-actions-wrapper">
                <ListItem icon={<FontAwesomeIcon icon={faThumbsUp} spin/>}
                          secondaryTitle={postActions.likes}/>
                <ListItem secondaryTitle={`${postActions.comments} comments`}/>
            </div>
            <div className="post-buttons-wrapper">
                <Button title="Like" icon={<FontAwesomeIcon icon={faThumbsUp} size="lg"/>}/>
                <Button title="Comment" icon={<FontAwesomeIcon icon={faComment} size="lg"/>}/>
            </div>
            <div className="post-messages-wrapper">
                {postMessage.map((post) => {
                    return (
                        <ListItem icon={<FontAwesomeIcon icon={faUser} size="lg"/>} secondaryTitle={
                            post.actions.map((element) => {
                                return (
                                    <span className="list-item-title-secondary">{element}</span>
                                )
                            })
                        } title={<ListItem title={post.author} secondaryTitle={post.text}/>}/>
                    )
                })}
            </div>
            <div className="post-reply">
                <ListItem icon={<FontAwesomeIcon icon={faUser} size="lg"/>}/>
                <input placeholder="Write a comment..."/>
            </div>
        </div>
    )
}
import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import CommentsSection from "../CommentsSection/CommentsSection";
import Post from "../Post/Post";

export default function Community() {
    return (
        <Wrapper>
            <CommentsSection>
                <Post/>
            </CommentsSection>
        </Wrapper>
    )
}
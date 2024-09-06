import React from "react";
import { useNavigate } from "react-router-dom";
import "../../css/score_story_style/score_story_share.css";

import storyImg from "../../img/story.png"

function ScoreStoryShare() {
    const navigate = useNavigate();

    const handleContinue = () => {
        navigate("/Home");
    };

    return (
        <>
            <div className="lines_share">
                <div className="line-1-share"></div>
                <div className="line-2-share"></div>
                <div className="line-3-share"></div>
                <div className="line-4-share"></div>
            </div>

            <div className="score-story-share-container">
                <span className="share-handline">Share your result in stories and get a gift</span>
                <img src={storyImg} alt="story" className="storyImg" />
                <div className="share-story-button" onClick={handleContinue}>
                    <span className="share-story-text">Share to story</span>
                </div>
            </div>
        </>
    );
}

export default ScoreStoryShare;

import React from "react"
import "../css/tasks.css"

// Images
import burn_emoji_animated from "../img/burn_emoji_animated.gif"
import tg_icon from "../img/tg_icon.png"
import x_icon from "../img/x_icon.png"
import flame_emoji from "../img/flame_emoji.webp"

class Tasks extends React.Component {
    render() {
        return (
          <div>
            <div className="container">
                <img src={burn_emoji_animated} alt="burn" className="burn-logo" />
                <span className="tasks-header">Tasks</span>
                <span className="tasks-description">Complete tasks and get more Flame.</span>
                <div className="tasks">

                    <div className="subscription">
                        <img src={tg_icon} alt="tg_icon" className="icon" />
                        <div className="text">
                            <div className="title">Subscribe to Burn Telegram</div>
                            <div className="points">+100 Flame</div>
                        </div>
                        <div className="open-button">
                            <div className="open">Start</div>
                        </div>
                    </div>

                    <div className="subscription">
                        <img src={x_icon} alt="x_icon" className="icon" />
                        <div className="text">
                            <div className="title">Subscribe to Burn X</div>
                            <div className="points">+100 Flame</div>
                        </div>
                        <div className="open-button">
                            <div className="open">Start</div>
                        </div>
                    </div>

                    <div className="subscription">
                        <img src={flame_emoji} alt="flame_emoji" className="icon" />
                        <div className="text">
                            <div className="title">Add 🔥 in Telegram name</div>
                            <div className="points">+100 Flame</div>
                        </div>
                        <div className="open-button">
                            <div className="open">Start</div>
                        </div>
                    </div>

                </div>  
            </div>
          </div>
        );
    }
}


export default Tasks
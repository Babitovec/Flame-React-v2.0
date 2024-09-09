import React from "react";
import "../css/tasks.css";

// Images
import tasks_gift_emoji_animated from "../img/tasks_gift_emoji_animated.gif";
import tg_icon from "../img/tasks/tg_icon.webp";
import x_icon from "../img/tasks/x_icon.webp";
import flame_emoji from "../img/flame_emoji.webp";
import wallet_icon from "../img/tasks/wallet_icon.webp";
import friends_icon from '../img/tasks/friends_icon.png';

const tg = window.Telegram.WebApp;

const Tasks = () => {

  const handleOpenTelegramChannel = () => {
    tg.openTelegramLink("https://t.me/flame_coin_community");
  };

  const handleOpenX = () => {
    tg.openLink("https://x.com/realDogsHouse"); //Заменить на реальный twitter
  };

  return (
    <>
      <div className="container-tasks">
        <img src={tasks_gift_emoji_animated} alt="burn" className="burn-logo" />
        <span className="tasks-header">Tasks</span>
        <span className="tasks-description">Complete tasks and get more Flame.</span>
        <div className="tasks">

          <div className="task">
            <img src={flame_emoji} alt="flame_emoji" className="icon" />
            <div className="text">
              <div className="title">Add 🔥 in Telegram name</div>
              <div className="points">+1 Gift 🎁</div>
            </div>
            <div className="open-button">
              <div className="open">Start</div>
            </div>
          </div>

          <div className="task">
            <img src={friends_icon} alt="flame_emoji" className="icon" />
            <div className="text">
              <div className="title">Invite 5 friends</div>
              <div className="points">+5 Gifts 🎁</div>
            </div>
            <div className="open-button">
              <div className="open">Start</div>
            </div>
          </div>

          {/* Connect wallet */}
          <div className="task">
            <img src={wallet_icon} alt="wallet_icon" className="icon" />
            <div className="text">
              <div className="title">Connect your wallet</div>
              <div className="points">+1 Gift 🎁</div>
            </div>
            <div className="open-button">
                <div className="open">Start</div>
            </div>
          </div>

          {/* Telegram channel subscribtion */}
          <div className="task">
            <img src={tg_icon} alt="tg_icon" className="icon" />
            <div className="text">
              <div className="title">Subscribe to Flame Telegram</div>
              <div className="points">+100 Flame 🔥</div>
            </div>
            <div className="open-button" onClick={handleOpenTelegramChannel}>
              <div className="open">Start</div>
            </div>
          </div>

          {/* Twitter subscribtion */}
          <div className="task">
            <img src={x_icon} alt="x_icon" className="icon" />
            <div className="text">
              <div className="title">Subscribe to Flame X</div>
              <div className="points">+100 Flame 🔥</div>
            </div>
            <div className="open-button" onClick={handleOpenX}>
              <div className="open">Start</div>
            </div>
          </div>

          {/* Twitter share about us */}
          <div className="task">
            <img src={x_icon} alt="x_icon" className="icon" />
            <div className="text">
              <div className="title">Share about us on X</div>
              <div className="points">+100 Flame 🔥</div>
            </div>
            <div className="open-button">
              <div className="open">Start</div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Tasks;

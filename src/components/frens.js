import React from "react";
import "../css/frens.css";

// Images
import masks_animated from '../img/masks_animated.gif';
import flame_emoji from "../img/flame_emoji.webp";

const tg = window.Telegram.WebApp;

const Frens = () => {
  const handleClick = () => {
    // Вызываем haptic feedback при нажатии
    tg.HapticFeedback.impactOccurred('light');
    // Здесь можно добавить дополнительные действия при нажатии на кнопку
  };

  return (
    <div>
      <div className="container-frens">
        <img src={masks_animated} alt="masks_animated" className="masks-emoji-animated" />
        <span className="frens-header">Invite Friends<br />and get more Flame</span>
        <div className="claim-frens">
          <div className="claimable-burn">
            <img src={flame_emoji} alt="burn_logo" className="burn-logo-claim" />
            <div className="claimable-burn-count">156</div>
          </div>
          <div className="claim-button" onClick={handleClick}>
            <div className="claim">Claim</div>
          </div>
        </div>
        <div className="frens-discription">Score 10% for each friend + 🎁</div>
        <div className="frens-count">3 Friends</div>

        <div className="frens-invited-container">
          <div className="invited-fren">
            <div className="fren-info">
              <div className="username-and-frens-count">
                <div className="fren-username">zan_zannn</div>
                <div className="username-years">7 years</div>
              </div>
              <div className="fren-total-earned-container">
                <div className="received_from_friend">+467</div>
                <img src={flame_emoji} alt="burn_logo" className="burn-logo-claim" />
              </div>
            </div>
          </div>

          <div className="invited-fren">
            <div className="fren-info">
              <div className="username-and-frens-count">
                <div className="fren-username">Babitovec</div>
                <div className="username-years">6 years</div>
              </div>
              <div className="fren-total-earned-container">
                <div className="received_from_friend">+320</div>
                <img src={flame_emoji} alt="burn_logo" className="burn-logo-claim" />
              </div>
            </div>
          </div>

          <div className="invited-fren">
            <div className="fren-info">
              <div className="username-and-frens-count">
                <div className="fren-username">KryakZXD</div>
                <div className="username-years">5 years</div>
              </div>
              <div className="fren-total-earned-container">
                <div className="received_from_friend">+217</div>
                <img src={flame_emoji} alt="burn_logo" className="burn-logo-claim" />
              </div>
            </div>
          </div>
        </div>

        <div className="invite-fren-background">
          <div className="invite-fren-button">
            <div className="invite-fren-text">Invite Friends</div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Frens;
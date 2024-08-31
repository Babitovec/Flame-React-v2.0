import React from "react";
import "../css/stats.css";

// Images
import crown_emoji_animated_compressed from "../img/crown_emoji_animated_compressed.gif"
import leaderboard_member_flame_icon from "../img/flame_emoji.webp"

const Stats = ({ username }) => {
  return (
    <>
      <div className="container-stats">
        <img src={crown_emoji_animated_compressed} alt="cronw_emoji_animated" className="crown-emoji-animated" />
        <span className="stats-header">Leaderboard</span>

        <div className="user-stats-box-container ">
          <div className="user-stats-box">
            <div className="username-and-flame-count-box">
              <div className="stats_username">{username}</div>
              <div className="burn-count">5738 Flame</div>
            </div>
            <div className="user-rank">#256791</div>
          </div>
        </div>

        <div className="total-users">2M Flamers</div>

        <div className="leaderboard">

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord-gold">#1</div>
              </div>
              <div className="leaderboard-member-username">Aboba</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">25,683,109</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord-silver">#2</div>
              </div>
              <div className="leaderboard-member-username">Marling</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">20,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord-bronze">#3</div>
              </div>
              <div className="leaderboard-member-username">Skulldugger</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">18,632,915</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#4</div>
              </div>
              <div className="leaderboard-member-username">FryerTuck</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">15,469,879</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#5</div>
              </div>
              <div className="leaderboard-member-username">Oblation</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">14,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#6</div>
              </div>
              <div className="leaderboard-member-username">Crucifery</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">12,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#7</div>
              </div>
              <div className="leaderboard-member-username">CatInHat</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">11,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#8</div>
              </div>
              <div className="leaderboard-member-username">Trilemma</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">10,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#9</div>
              </div>
              <div className="leaderboard-member-username">Altometer</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">9,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#10</div>
              </div>
              <div className="leaderboard-member-username">MoonMan</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">8,679,132</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

          <div className="leaderboard-member">
            <div className="rank-and-username-container">
              <div className="rank-leaderbord-container">
                <div className="rank-leaderbord">#11</div>
              </div>
              <div className="leaderboard-member-username">Nessundorma</div>
            </div>
            <div className="leaderboard-member-flames">
              <div className="leaderboard-member-flames-count">5,144,128</div>
              <img src={leaderboard_member_flame_icon} alt="flame_icon" className="leaderboard-member-flame-icon" />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Stats;
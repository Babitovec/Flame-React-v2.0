import React from "react";
import "../css/stats.css";

// Images
import crown_emoji_animated_compressed from "../img/crown_emoji_animated_compressed.gif"

class Stats extends React.Component {
  render() {
    return (
      <>
        <div className="container-stats">
          <img src={crown_emoji_animated_compressed} alt="cronw_emoji_animated" className="crown-emoji-animated" />
          <span className="stats-header">Leaderboard</span>
          <div className="user-stats-box">
            <div className="username-and-flame-count-box">
              <div className="stats_username">{this.props.username}</div>
              <div className="burn-count">5738 Flame</div>
            </div>
            <div className="user-rank">#256791</div>
          </div>
          <div className="total-users">2M Flamers</div>

          <div className="leaderboard">

            <div className="leaderboard-member">
              <div>
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

            <div className="leaderboard-member">
              <div className="leaderboard-member-username-and-flames">
                <div className="leaderboard-member-username">Abobus</div>
                <div className="leaderboard-member-flames">20,679,132 FLAMES</div>
              </div>
              <div className="rank-leaderbord">#1</div>
            </div>

          </div>
        </div>
      </>
    );
  }
}

export default Stats;

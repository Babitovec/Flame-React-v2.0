import React from "react";
import "../css/navigation.css";

import home_icon from '../img/navigation/home_icon.webp';
import tasks_icon from '../img/navigation/tasks_icon.webp';
import friends_icon from '../img/navigation/friends_icon.webp';
import stats_icon from '../img/navigation/stats_icon.webp';

const tg = window.Telegram.WebApp;

class Navigation extends React.Component {
  handleNavigation(page) {
    tg.HapticFeedback.impactOccurred('light');
    this.props.changePage(page);
  }

  render() {
    const { currentPage } = this.props;

    return (
      <nav className="navigation">
        <div
          className={`nav-item ${currentPage === 'home' ? 'active' : ''}`}
          onClick={() => this.handleNavigation('home')}
        >
          <img src={home_icon} alt="home" className="home_icon" />
          Home
        </div>
        <div
          className={`nav-item ${currentPage === 'tasks' ? 'active' : ''}`}
          onClick={() => this.handleNavigation('tasks')}
        >
          <img src={tasks_icon} alt="tasks" className="tasks_icon" />
          Tasks
        </div>
        <div
          className={`nav-item ${currentPage === 'frens' ? 'active' : ''}`}
          onClick={() => this.handleNavigation('frens')}
        >
          <img src={friends_icon} alt="friends" className="friends_icon" />
          Frens
        </div>
        <div
          className={`nav-item ${currentPage === 'stats' ? 'active' : ''}`}
          onClick={() => this.handleNavigation('stats')}
        >
          <img src={stats_icon} alt="stats_icon" className="stats_icon" />
          Stats
        </div>
      </nav>
    );
  }
}

export default Navigation;

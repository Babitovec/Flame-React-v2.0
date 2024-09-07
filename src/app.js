import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios'; // Импорт Axios

// Components
import Home from "./components/home";
import ScoreStoryYears from "./components/score_story/score_story_years";
import ScoreStoryPremium from "./components/score_story/score_story_premium";
import ScoreStoryReward from "./components/score_story/score_story_reward";
import ScoreStoryShare from "./components/score_story/score_story_share";
import Gifts from "./components/mini_games/gifts.js";
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.setHeaderColor("#000000");
tg.setBackgroundColor("#000000");
tg.expand();
tg.disableVerticalSwipes();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    tg.ready();  // Инициализация Telegram Web App

    const userData = tg.initDataUnsafe.user;

    if (userData) {
      axios.post('https://flameapp-babito.amvera.io', userData)
        .then(response => {
          console.log('Данные успешно отправлены:', response.data);
        })
        .catch(error => {
          console.error('Ошибка при отправке данных:', error);
        });
    }
  }, []);

  return (
    <div>

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="/Home" />} />
              <Route path="/Home" element={<Home />} />
              <Route path="/Gifts" element={<Gifts />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <Routes>
        <Route>
          <Route path="/ScoreStoryYears" element={<ScoreStoryYears />} />
          <Route path="/ScoreStoryPremium" element={<ScoreStoryPremium />} />
          <Route path="/ScoreStoryReward" element={<ScoreStoryReward />} />
          <Route path="/ScoreStoryShare" element={<ScoreStoryShare />} />
        </Route>
      </Routes>

      {location.pathname !== "/ScoreStoryYears"
        && location.pathname !== "/ScoreStoryPremium"
        && location.pathname !== "/ScoreStoryReward"
        && location.pathname !== "/ScoreStoryShare"
        && location.pathname !== "/Gifts" && <Navigation />}
    </div>
  );
};

export default App;

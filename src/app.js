import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios';

// Components
import ScoreStoryYears from "./components/score_story/score_story_years";
import ScoreStoryPremium from "./components/score_story/score_story_premium";
import ScoreStoryReward from "./components/score_story/score_story_reward";
import ScoreStoryShare from "./components/score_story/score_story_share";
import DailyStreak from "./components/dailyStreak.js";
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
      axios.post('https://more-gratefully-hornet.ngrok-free.app', userData)
        .then(response => {
          console.log('Данные успешно отправлены:', response.data);
        })
        .catch(error => {
          console.error('Ошибка при отправке данных:', error);
        });

      // Отправляем запрос для обновления последнего времени входа
      axios.put(`https://more-gratefully-hornet.ngrok-free.app/user/${userData.id}/update-login`)
        .then(response => {
          console.log('Время последнего входа обновлено:', response.data);
        })
        .catch(error => {
          console.error('Ошибка при обновлении времени последнего входа:', error);
        });

      axios.get(`https://more-gratefully-hornet.ngrok-free.app/user/${userData.id}/daily-bonus-status`)
      .then(response => {
        console.log('daily-bonus-status:', response.data);
      })
    }
  }, []);

  return (
    <>

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Routes>
            <Route>
              <Route path="/" element={<Navigate to="/Home" />} />
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
          <Route path="/DailyStreak" element={<DailyStreak />} />
        </Route>
      </Routes>

      {location.pathname !== "/ScoreStoryYears"
        && location.pathname !== "/ScoreStoryPremium"
        && location.pathname !== "/ScoreStoryReward"
        && location.pathname !== "/ScoreStoryShare"
        && location.pathname !== "/DailyStreak"
        && location.pathname !== "/Gifts" && <Navigation />}
    </>
  );
};

export default App;
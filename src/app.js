import React, { useEffect, useState } from "react";
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
  const [showDailyStreak, setShowDailyStreak] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Состояние загрузки

  useEffect(() => {
    tg.ready();

    const userData = tg.initDataUnsafe.user;

    const checkDailyBonus = async () => {
      try {
        if (userData) {
          // Проверяем, заходил ли пользователь уже сегодня
          const response = await axios.get(`https://more-gratefully-hornet.ngrok-free.app/user/${userData.id}/daily-bonus-status`);
          setShowDailyStreak(!response.data.bonusReceivedToday); // Если бонус сегодня не был получен, показываем DailyStreak

          // Обновляем время последнего входа
          await axios.put(`https://more-gratefully-hornet.ngrok-free.app/user/${userData.id}/update-login`);
        }
      } catch (error) {
        console.error('Ошибка проверки бонуса:', error);
      } finally {
        setIsLoading(false); // Завершаем загрузку после проверки
      }
    };

    checkDailyBonus();
  }, []);

  if (isLoading) {
    // Можно отобразить индикатор загрузки, пока идёт проверка
    return <div>Загрузка...</div>;
  }

  return (
    <>
      {showDailyStreak ? (
        <Routes>
          <Route path="*" element={<Navigate to="/DailyStreak" />} />
        </Routes>
      ) : (
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
      )}
    </>
  );
};

export default App;

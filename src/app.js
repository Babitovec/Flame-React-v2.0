import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useLocation, useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();
  const [showDailyStreak, setShowDailyStreak] = useState(false);
  const [loading, setLoading] = useState(true); // Добавляем состояние загрузки

  useEffect(() => {
    tg.ready();  // Инициализация Telegram Web App

    const userData = tg.initDataUnsafe.user;

    if (userData) {
      // Отправляем запрос для обновления последнего времени входа
      axios.put(`https://more-gratefully-hornet.ngrok-free.app/user/${userData.id}/update-login`)
        .then(response => {
          console.log('Время последнего входа обновлено:', response.data);
        })
        .catch(error => {
          console.error('Ошибка при обновлении времени последнего входа:', error);
        });

      // Проверяем, был ли получен бонус сегодня
      axios.get(`https://more-gratefully-hornet.ngrok-free.app/user/${userData.id}/daily-bonus-status`,
        {
          headers: {
            'ngrok-skip-browser-warning': 'true', // Добавляем заголовок для ngrok
          },
        })
        .then(response => {
          const { bonusReceivedToday } = response.data;
          if (!bonusReceivedToday) {
            setShowDailyStreak(true); // Показать страницу DailyStreak
            navigate('/DailyStreak'); // Перенаправить на DailyStreak
          } else {
            navigate('/Home'); // Перенаправить на Home, если бонус уже получен
          }
        })
        .catch(error => {
          console.error('Ошибка при проверке бонуса:', error);
        })
        .finally(() => {
          setLoading(false); // Убираем загрузку после проверки
        });

    } else {
      setLoading(false); // Убираем загрузку, если данных пользователя нет
    }
  }, [navigate]);

  const handleContinue = () => {
    setShowDailyStreak(false); // Скрываем DailyStreak
    navigate('/Home'); // Перенаправляем на Home
  };

  if (loading) {
    return (
      <div className="loader-box">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Routes>
            <Route path="/" element={<Navigate to={showDailyStreak ? "/DailyStreak" : "/Home"} />} />
            <Route path="/Gifts" element={<Gifts />} />
            <Route path="/DailyStreak" element={<DailyStreak handleContinue={handleContinue} />} />
            {/* Вставка остальных маршрутов в зависимости от состояния */}
            {!showDailyStreak && (
              <>
                <Route path="/ScoreStoryYears" element={<ScoreStoryYears />} />
                <Route path="/ScoreStoryPremium" element={<ScoreStoryPremium />} />
                <Route path="/ScoreStoryReward" element={<ScoreStoryReward />} />
                <Route path="/ScoreStoryShare" element={<ScoreStoryShare />} />
              </>
            )}
          </Routes>
        </CSSTransition>
      </TransitionGroup>

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

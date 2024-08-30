import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// Components
import Home from "./components/home";
import ScoreStoryYears from "./components/score_story/score_story_years";
import ScoreStoryPremium from "./components/score_story/score_story_premium";
import ScoreStoryReward from "./components/score_story/score_story_reward"; // Импорт компонента для нового маршрута
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.disableVerticalSwipes();

const App = () => {
  const location = useLocation();

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/score_story_years" element={<ScoreStoryYears />} />
        <Route path="/ScoreStoryPremium" element={<ScoreStoryPremium />} />
        <Route path="/ScoreStoryReward" element={<ScoreStoryReward />} /> {/* Добавление маршрута для ScoreStoryReward */}
      </Routes>
      {/* Скрываем Navigation на определенных маршрутах */}
      {location.pathname !== "/score_story_years" && location.pathname !== "/ScoreStoryPremium" && location.pathname !== "/ScoreStoryReward" && <Navigation />}
    </div>
  );
};

export default App;

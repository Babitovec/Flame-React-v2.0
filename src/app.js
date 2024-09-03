import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import axios from 'axios'; // Импорт Axios

// Components
import Home from "./components/home";
import ScoreStoryYears from "./components/score_story/score_story_years";
import ScoreStoryPremium from "./components/score_story/score_story_premium";
import ScoreStoryReward from "./components/score_story/score_story_reward"; 
import Gifts from "./components/mini_games/gifts.js";
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.setHeaderColor("#000000");
tg.expand();
tg.disableVerticalSwipes();

const App = () => {
  const location = useLocation();

  useEffect(() => {
    const userData = tg.initDataUnsafe.user;
    console.log("User data:", userData); // Логируем данные
  
    if (userData) {
      axios.post('https://flameapp-babito.amvera.io/', userData)
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
      <Routes location={location}>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/score_story_years" element={<ScoreStoryYears />} />
        <Route path="/ScoreStoryPremium" element={<ScoreStoryPremium />} />
        <Route path="/ScoreStoryReward" element={<ScoreStoryReward />} />
      </Routes>

      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames="fade"
          timeout={450}
        >
          <Routes>
            <Route>
              <Route path="/Gifts" element={<Gifts />} /> 
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      
      {location.pathname !== "/score_story_years"
        && location.pathname !== "/ScoreStoryPremium"
        && location.pathname !== "/ScoreStoryReward"
        && location.pathname !== "/Gifts" && <Navigation />}
    </div>
  );
};

export default App;

import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.disableVerticalSwipes();

class App extends React.Component {
  componentDidMount() {
    // Устанавливаем цвет верхней панели в зависимости от темы
    this.setHeaderTheme();
    
    // Обрабатываем изменение темы
    tg.onEvent('themeChanged', this.setHeaderTheme);
  }

  setHeaderTheme = () => {
    const theme = tg.themeParams;
    const header = document.querySelector('.header'); // Замените на нужный селектор
    if (header) {
      header.style.backgroundColor = theme.bg_color || '#000000'; // Используем цвет темы или черный по умолчанию
    }
  };

  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            {/* При заходе на корневой путь перенаправляем на "/Home" */}
            <Route path="/" element={<Navigate to="/Home" />} />
          </Routes>
          <Navigation />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

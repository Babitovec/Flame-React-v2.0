import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navigation from "./components/navigation.js";

const tg = window.Telegram.WebApp;

tg.expand();
tg.disableVerticalSwipes();

class App extends React.Component {
  componentDidMount() {
    // Устанавливаем черный цвет для шапки
    tg.setHeaderColor('bg_color', '#000000');
  }

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

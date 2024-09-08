import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import "./css/main.css" // подключение main.css, который применяется ко всему
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

import App from "./app.js"; // Подключение app.js 

const app = ReactDOMClient.createRoot(document.getElementById("app")) //создаем путь где будем выводить контент и указываем его как константу

app.render(
  <SkeletonTheme baseColor="#313131" highlightColor="#525252" borderRadius="25px">
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </SkeletonTheme>
) //выводим в div <> то что внутри функции

import React from "react"
import * as ReactDOMClient from 'react-dom/client';
import "./css/main.css" // подключение main.css, который применяется ко всему
import { BrowserRouter } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import dotenv from 'dotenv';

// Подключение кошелька работает,но не включаю из-за warning https://docs.ton.org/develop/dapps/ton-connect/react
// import { TonConnectUIProvider } from '@tonconnect/ui-react'
// import { TonConnectButton } from '@tonconnect/ui-react' //Чтобы работал кнопка <TonConnectButton />

import App from "./app.js"; // Подключение app.js 

dotenv.config()
const app = ReactDOMClient.createRoot(document.getElementById("app")) //создаем путь где будем выводить контент и указываем его как константу

app.render(
  // <TonConnectUIProvider manifestUrl="https://test-youtube.s3.amazonaws.com/manifest.json">
    <SkeletonTheme baseColor="#323232" highlightColor="#626262" borderRadius="15px">
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SkeletonTheme>
  // </TonConnectUIProvider>
) //выводим в div <> то что внутри функции

import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { createContext, useState } from "react";

export const AnswerContext = createContext("");

function MyApp({ Component, pageProps }) {
  const [message, setMessage] = useState([]);
  return (
    <AnswerContext.Provider value={{ message, setMessage }}>
      <Component {...pageProps} />
    </AnswerContext.Provider>
  );
}

export default MyApp;

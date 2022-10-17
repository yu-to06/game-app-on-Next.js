import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React from "react";
import { createContext, useState } from "react";

import Layout from "../components/Layout";

export const AnswerContext = createContext("");

export default function MyApp({ Component, pageProps }) {
  const [message, setMessage] = useState([]);
  return (
    <AnswerContext.Provider value={{ message, setMessage }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AnswerContext.Provider>
  );
}

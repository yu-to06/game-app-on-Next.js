import React from "react";
import { Layout } from "../components/Layout";
import { useContext } from "react";
import { AnswerContext } from "./_app";

function questionHome() {
  const { message } = useContext(AnswerContext);
  return (
    <Layout title="ホーム画面です">
      <p>ここがホーム画面です</p>
      <p>現在のコンテキストは{message}です</p>
    </Layout>
  );
}

export default questionHome;

import { useContext, useState } from "react";
import Link from "next/link";

import { Layout } from "../components/Layout";
import { AnswerContext } from "./_app";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export default function Home(props) {
  const [text, setText] = useState("");
  const [finish, setFinish] = useState(false);
  const { message, setMessage } = useContext(AnswerContext);

  const Answer = (text) => {
    alert("正解です");
    setMessage([...message, text]);
    setFinish(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const judge = (text) => {
    text === "A" ? Answer(text) : alert("違います");
  };

  return (
    <Layout>
      <p className="text-4xl">this text is witten index.js</p>
      <Stack spacing={2} mt={2} className="w-2/4 ">
        <TextField
          id="outlined-basic"
          label="こたえ"
          placeholder="答えを入力してください"
          variant="outlined"
          onChange={() => handleChange(event)}
        />
        <Button
          variant="contained"
          size="medium"
          className="bg-blue-600 hover:bg-blue-400"
          onClick={() => judge(text)}
        >
          できた
        </Button>
      </Stack>

      <p className="h1">ここにコンテキスト{message}が入るはず</p>

      {/* 次の問題へ進む */}
      {finish ? (
        <Link href="questionHome">
          <a>
            <Button
              variant="contained"
              size="medium"
              className="bg-blue-600 hover:bg-blue-400"
            >
              次の問題へ
            </Button>
          </a>
        </Link>
      ) : (
        <Link href="questionHome">
          <a>
            <Button
              variant="contained"
              size="medium"
              className="bg-blue-600 hover:bg-blue-400"
              disabled
            >
              次の問題へ
            </Button>
          </a>
        </Link>
      )}
    </Layout>
  );
}

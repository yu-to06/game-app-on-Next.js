import { useContext, useState, useEffect } from "react";
import useSWR from "swr";
import { useRouter } from "next/router";

import { AnswerContext } from "../_app";
import NextButton from "../../components/button/NextButton";
import HomeButton from "../../components/button/HomeButton";
import HintModal from "../../components/modals/HintModal";
import AnswerPageButton from "../../components/button/AnswerPageButton";

import { Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";
import Alert from "@mui/material/Alert";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function QuestionDetail(props) {
  const router = useRouter();
  const id = router.query.id;
  const { data, error } = useSWR(`/api/question/${id}`, fetcher);
  const [text, setText] = useState("");
  const [finish, setFinish] = useState(false);
  const { message, setMessage } = useContext(AnswerContext);
  useEffect(() => {
    setFinish(false);
  }, [id]);
  if (error) return <Alert severity="error">データの取得に失敗しました</Alert>;
  if (!data) return <CircularProgress />;
  const Answer = (text) => {
    alert("(｣´□`)｣ ｵﾒﾃﾞﾄｳｩｩｩｩｩｩｩｩｩｯ!!!!!");
    setMessage([...message, text]);
    setFinish(true);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const judge = (text) => {
    text === `${data.Answer}` ? Answer(text) : alert("(´·ω·`)ﾁｶﾞｳﾖ...");
  };

  return (
    <div className="flex items-center flex-col w-screen h-screen pb-24 bg-gray-200 ">
      <h1 className="text-4xl">第{data.number}問</h1>
      <h2 className="text-2xl mt-3">{data.title}</h2>
      <div className="flex items-center justify-center flex-col text-center w-screen">
        <h2 className="text-3xl py-4">{data.question}</h2>
        <small className="text-red-400">
          ※答えは大文字アルファベットで入力してね
        </small>
        <Stack spacing={8}>
          <TextField
            id="outlined-basic"
            label="こたえ"
            placeholder="答えを入力してください"
            variant="outlined"
            onChange={() => handleChange(event)}
          />
          {finish ? (
            <Button
              variant="contained"
              size="medium"
              className="bg-blue-600 hover:bg-blue-400 "
              disabled
            >
              回答済みです。
            </Button>
          ) : (
            <Button
              variant="contained"
              size="medium"
              className="bg-blue-600 hover:bg-blue-400 "
              onClick={() => judge(text)}
            >
              できた
            </Button>
          )}
          {finish ? "" : <HintModal hint={data.hint} />}
          {/* 次の問題へ進む ネストされた三項演算子で最終問題がおわるとanswerpagebuttonが表示されるようにしたい */}
          {finish && id != 7 ? <NextButton id={id} /> : <HomeButton />}
          {message.length == 8 ? <AnswerPageButton /> : ""}
        </Stack>
      </div>
    </div>
  );
}

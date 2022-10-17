import { useState } from "react";

import TextField from "@mui/material/TextField";
import LastModal from "../components/modals/LastModal";
import Container from "../components/Container";

export default function Answer() {
  const [inputAnswer, setInputAnswer] = useState("");
  return (
    <Container>
      <h1 className="text-4xl pt-6">ここはAnswerページです</h1>
      <div className="text-2xl mt-6 text-center flex flex-col justify-center items-center ">
        <p>お疲れ様でした。今回は簡単やったかも？</p>
        <br />
        <p>さて、いままでの答えを並べ替えてできるメッセージはなんでしょう？</p>
        <small className="text-red-400 mt-3 text-xs">
          ※答えは大文字で入力してね
        </small>
        <TextField
          id="outlined-basic"
          label="こたえ"
          variant="outlined"
          className=" w-1/2"
          onChange={() => setInputAnswer(event.target.value)}
        />
        <LastModal inputAnswer={inputAnswer} />
      </div>
    </Container>
  );
}

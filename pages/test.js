import { useContext } from "react";
import { AnswerContext } from "../pages/_app";

export default function Test() {
  const { message, setMessage } = useContext(AnswerContext);

  const OnSetMessage = () => {
    setMessage("abcdefghijkl");
  };
  return (
    <div>
      <p>テストページです。</p>
      <p>ここにメッセージが入ります{message}</p>
      <p>ここにメッセージの長さが入ります{message.length}</p>
      <button onClick={OnSetMessage}>+message</button>
    </div>
  );
}

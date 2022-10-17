import AnswerPageButton from "../components/button/AnswerPageButton";
import QuestionButton from "../components/button/QuestionButton";
import Container from "../components/Container";
import { questions } from "../data";

export default function Home() {
  const Qbutton = questions.map((question) => (
    <QuestionButton key={question.number} id={question.id} />
  ));
  return (
    <Container>
      <div className="grid grid-rows-2 grid-cols-4 gap-4 w-screen text-center">
        {Qbutton}
      </div>
      <div className="w-4/5">
        <AnswerPageButton />
      </div>
    </Container>
  );
}

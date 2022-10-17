import fetch from "node-fetch";
const apiUrl = "localhost:3000/api/QuestionAPI";

export async function getAllQuestionData() {
  const res = await fetch(new URL(apiUrl));
  const allquestion = await res.json();
  return allquestion;
}

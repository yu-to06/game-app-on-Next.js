import { questions } from "../../../data";

export default function handler(req, res) {
  let id = req.query.id;

  res.json(questions[id]);
}

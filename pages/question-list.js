import { Layout } from "../components/Layout";
import { Button } from "@mui/material";
import { Answer } from "../components/Layout";

export default function Questionlist() {
  return (
    <Layout title="問題リスト">
      <div className="border-4 flex flex-col justify-center w-screen items-center">
        <p className="text-4xl ">this text is witten question-list pages</p>
        <Button
          variant="contained"
          size="medium"
          className="bg-blue-600 hover:bg-blue-400"
        >
          できた
        </Button>
      </div>
    </Layout>
  );
}

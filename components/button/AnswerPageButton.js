import { Button } from "@mui/material";
import Link from "next/link";

export default function AnswerPageButton() {
  return (
    <div className="w-full mt-8 bg-green-400 hover:bg-green-200 cursor-pointer text-center">
      <Button variant="text" size="medium">
        <Link href="/Answer">
          <a>答えの入力へ</a>
        </Link>
      </Button>
    </div>
  );
}

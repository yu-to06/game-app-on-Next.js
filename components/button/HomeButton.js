import Link from "next/link";
import { Button } from "@mui/material";

export default function HomeButton() {
  return (
    <>
      <Button
        variant="contained"
        size="medium"
        className="bg-blue-600 hover:bg-blue-400"
      >
        <Link href="/Home">
          <a>ホームへ戻る</a>
        </Link>
      </Button>
    </>
  );
}

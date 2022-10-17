import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function WeddingButton() {
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        size="medium"
        className="bg-blue-600 hover:bg-blue-400"
        onClick={() =>
          router.push({
            pathname: `https://silverya.com/handmade`,
          })
        }
      >
        指輪製作予約へ
      </Button>
    </>
  );
}

import { Button } from "@mui/material";
import { useRouter } from "next/router";

export default function NextButton(props) {
  const { id } = props;
  const number = Number(`${id}`) + 1;
  const router = useRouter();
  return (
    <>
      <Button
        variant="contained"
        size="medium"
        className="bg-blue-600 hover:bg-blue-400"
        onClick={() =>
          router.push({
            pathname: `/Question/QuestionDetail`,
            query: { id: number },
          })
        }
      >
        NEXT STAGE
      </Button>
    </>
  );
}

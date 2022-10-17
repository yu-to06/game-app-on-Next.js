import Link from "next/link";

import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

import Container from "../components/Container";

export default function Index() {
  return (
    <Container>
      <div className="text-center border-4 bg-blue-100">
        <Stack
          spacing={3}
          className="flex flex-col justify-center items-center font-bold text-lg"
        >
          <p>
            なんと早いことで<span className="text-red-300">４周年</span>
            です٩(ˊᗜˋ*)و
          </p>
          <p>
            大きな喧嘩もなく穏やかに過ごせてるのはみーちゃんの性格のおかげかなぁと思う〜
          </p>
          <p className="text-red-400">いつもありがとう‹\(´ω` )/›</p>
          <br />
          <p>
            さて、今回も謎解きやってもらうよ！答えはとちょからのメッセージになってるじぇ！
          </p>
          <p>やし、諦めずにがんばってね！</p>
          <p>わからん時は、『( ･ὢ･ ) ﾑﾑｯ』ボタンを押すんだ！</p>
          <p>では、レッツゴー↓</p>
          <Button
            variant="text"
            className="bg-green-400 w-1/2 hover:bg-green-200 cursor-pointer"
          >
            <Link href="/Home">
              <a>NEXT STEP</a>
            </Link>
          </Button>
        </Stack>
      </div>
    </Container>
  );
}

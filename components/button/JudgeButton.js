import Link from "next/link";

export default function JudgeButton() {
  return (
    <div className="mt-2">
      <p className="pl-7">あなたの答えを選んでください</p>
      <div className="flex justify-between">
        <Link href="/Wedding">
          <a className="hover:text-blue-700">はい</a>
        </Link>
        <Link href="/">
          <a className="hover:text-blue-700">いいえ</a>
        </Link>
      </div>
    </div>
  );
}

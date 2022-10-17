import Head from "next/head";
import Link from "next/link";
import { useContext } from "react";
import { AnswerContext } from "../pages/_app";

export default function Layout({ children, title = "aniversarry" }) {
  const { message } = useContext(AnswerContext);

  return (
    <div className="flex items-center flex-col  min-h-screen text-sm text-gray-600 font-mono">
      <Head>{title}</Head>
      <header>
        <nav className="w-screen bg-green-500 text-center">
          <div className="h-14 flex justify-between flex-grow justify-around items-center ">
            <div>
              <Link href="/Home">
                <a className="text-white text-base px-3 py-5 hover:opacity-80 cursor-pointer">
                  HOME
                </a>
              </Link>
            </div>
            <div className="text-lg italic font-bold text-white text-right w-64">
              ~4周年aniversarry~
            </div>
            <div className="text-white text-base text-center">
              <p>Answer Message:{message}</p>
              {/* <p>{message}</p> */}
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="w-screen bg-green-500 h-10 flex justify-center items-center border-t fixed bottom-0">
        <p className="text-white text-base">&copy; totyo.com 2022-12-11</p>
      </footer>
    </div>
  );
}

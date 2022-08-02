import Head from "next/head";
import Link from "next/link";

export const Layout = ({ children, title = "aniversarry" }) => {
  const answer = [];

  return (
    <div className="flex items-center flex-col min-h-screen text-sm text-gray-600 font-mono">
      <Head>{title}</Head>
      <header>
        <nav className="w-screen bg-green-500">
          <div className="h-14 flex justify-around item-center px-8 border-4">
            <div>
              <Link href="/">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  HOME
                </a>
              </Link>
            </div>
            <div>~4周年aniversarry~</div>
            <div>
              <Link href="/question-list">
                <a className="text-gray-300 hover:bg-gray-700 px-3 py-2 rounded">
                  Question
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main>{children}</main>
      <footer className="w-full h-12 flex justify-center item-center border-t">
        <p>&copy; totyo.com </p>
        <p>2022-12-11</p>
      </footer>
    </div>
  );
};

import Image from "next/image";
import { useEffect } from "react";

import scrollFadeIn from "../components/scrollFadeIn";
import WeddingButton from "../components/button/Weddingbutton";

export default function Wedding() {
  useEffect(() => {
    scrollFadeIn();
  }, []);
  return (
    <div className=" flex items-center justify-center flex-col w-screen h-screen pb-24 bg-gray-200 js-show-on-scroll delay-1000">
      <Image src="/Wsumi.png" width={700} height={500} />
      <div className="text-center my-8">
        <h1 className="font-fancy text-2xl">
          Wedding Anniversary ~Best wishes for the future~
        </h1>
        <p className="text-lg leading-10">とちょ氏を呼びに行ってね。</p>
        <p>Thank you for playing‹\(´ω` )/›</p>
      </div>
      <WeddingButton />
    </div>
  );
}

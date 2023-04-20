import { Urbanist } from "next/font/google";
import Chat from "@/components/chat";
import Poll from "@/components/poll";
import Header from "@/components/header";
import Analytics from "@/components/analytics";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Analytics />
      <main
        className={`mx-auto flex min-h-screen max-w-prose flex-col items-center justify-center selection:bg-yellow-200 selection:text-black ${urbanist.className} gap-3 px-4`}
        lang="en"
      >
        <Header />
        <Chat />
        <Poll />
      </main>
    </>
  );
}

import { Urbanist } from "next/font/google";
import Chat from "@/components/chat";
import Poll from "@/components/poll";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`mx-auto flex min-h-screen max-w-prose flex-col items-center justify-center ${urbanist.className}`}
      lang="en"
    >
      <Chat />
      <Poll />
    </main>
  );
}

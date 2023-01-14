import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import windows from "../public/windows.png";
import { signIn, signOut, useSession } from "next-auth/react";
import terminal from "../public/terminal.png";
import Main from "./components/Main/Main"


const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.name ? (
        <Main/>
      ) : (
        <div className="flex bg-gradient-to-b from-[#572CAB] to-[#6C1797] min-h-screen flex-col items-center justify-center">
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className=" flex w-full flex-1 flex-col h-full items-center justify-center px-20 text-center">
            <div className="w-20 h-20">
              <Image src={terminal} object-fit= "cover" alt="none" />
            </div>
          </main>
          <footer className="h-[10vh]" onClick={() => signIn()}>
            <button className="bg-red-500 px-4 py-2 text-lg rounded-xl text-white font-bold tracking-widest ">
              Login
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Home;

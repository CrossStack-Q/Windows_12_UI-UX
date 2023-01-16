import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import windows from "../public/windows.png";
import { signIn, signOut, useSession } from "next-auth/react";
import terminal from "../public/terminal.png";
import Main from "./components/Main/Main"
import aman from "../public/aman.png"


const Home: NextPage = () => {
  const { data: session } = useSession();
  return (
    <div>
      {session?.user?.name ? (
        <Main />
      ) : (
        <div className="flex bg-gradient-to-b from-[#000000] to-[#6C1797] min-h-screen flex-col items-center justify-center">
          <Head>
            <title>Aman and Anurag</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className=" flex w-full flex-1 flex-col h-full items-center justify-center px-20 text-center">
            
              <div className="w-32 h-32">
                <Image className="rounded-full" src={aman} object-fit="cover" alt="none" />
              </div>
              <p className="text-3xl text-white font-semibold m2">
                Aman Nagar
              </p>

              <button onClick={() => signIn()} className="bg-purple-600 m-4 px-4 py-2 text-lg rounded-xl text-white font-bold tracking-widest ">
              Login
            </button>
              
          </main>
          <footer className="h-[10vh]" >
            
          </footer>
        </div>
      )}
    </div>
  );
};

export default Home;

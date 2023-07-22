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
      <Main/>
    </div>
  );
};

export default Home;

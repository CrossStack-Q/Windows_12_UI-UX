import React from "react";
import Taskbar from "./Taskbar/Taskbar"

import Head from "next/head";
import Image from "next/image";
import Search from "./Search/Search"
import { Popover, User, Button, Grid, Input } from "@nextui-org/react";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { useAppContext } from "../../../context/state";
import Browser from "./Browser/Browser";



function Main() {
  // search wala

  const { search, setSearch } = useAppContext();

  

  return (
    <div className="bg-[url(../public/backo.jpg)] w-screen h-screen bg-cover flex min-h-screen flex-col items-center justify-center">
      {/* <header>
        Hello
        <button
          onClick={() => signOut()}
          className="bg-red-500 px-2 py-1 rounded-lg text-white font-semibold"
        >
          signout
        </button>
      </header> */}
      {/* .
      ..
      ...
      ....
      ...
      ..
      ...
      ....
      ..
      ...
      ....
      ..
      ...
      .... */}
      <main className="flex-1 w-full flex justify-center flex-col items-center">
        <Search/>
        <Browser/>
      </main>
      {/* .
      ..
      ...
      ....
      ...
      ..
      ...
      ....
      ..
      ...
      ....
      ..
      ...
      .... */}
      <Taskbar/>
    </div>
  );
}

export default Main;

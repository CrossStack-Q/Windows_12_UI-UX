import React from "react";
import { Popover, User, Button, Grid, Input } from "@nextui-org/react";
import { useAppContext } from "../../../../../context/state";
import Image from "next/image";
import excel from "../../../../../public/excel.png";

function Panel() {
  const { showBrowser, setShowBrowser, search, setSearch } = useAppContext();
  return (
    <Popover>
      <Popover.Trigger>
        <div className="flex gap-1">
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white hover:text-slate-200"
            >
              <path d="M4.5 9.75a.75.75 0 00-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0012 15v-4.5a.75.75 0 00-.75-.75H4.5z" />
              <path
                fill-rule="evenodd"
                d="M3.75 6.75a3 3 0 00-3 3v6a3 3 0 003 3h15a3 3 0 003-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 00-3-3h-15zm15 1.5a1.5 1.5 0 011.5 1.5v6a1.5 1.5 0 01-1.5 1.5h-15a1.5 1.5 0 01-1.5-1.5v-6a1.5 1.5 0 011.5-1.5h15z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <div className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-white hover:text-slate-200"
            >
              <path
                fill-rule="evenodd"
                d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 010 1.061l-.53.53a.75.75 0 01-1.062 0 8.25 8.25 0 00-11.667 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.204 3.182a6 6 0 018.486 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0 3.75 3.75 0 00-5.304 0 .75.75 0 01-1.06 0l-.53-.53a.75.75 0 010-1.06zm3.182 3.182a1.5 1.5 0 012.122 0 .75.75 0 010 1.061l-.53.53a.75.75 0 01-1.061 0l-.53-.53a.75.75 0 010-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
        </div>
      </Popover.Trigger>
      <Popover.Content
        css={{
          backgroundColor: "rgba(0,0,0,0.6)",
          border: "0",
          display: "flex",
          flexDirection: "column",
          maxWidth: "30vw",
          height: "46vh",
          outline: "none",
          padding: "$6",
          overflow: "hidden",
        }}
      >
        <button className="text-white">
          HelloHelloHelloHelloHelloHelloHelloHelloHello
        </button>
        <div className="flex">
          <div className="flex-[0.5] ">
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-32 h-32 text-white m-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="absolute text-white">63%</p>
            </div>
            <p className="text-white">A Man Laptop</p>
          </div>
          <div className="flex flex-col flex-[0.5] ">
            <div>wifi</div>
            <div>bluetooth</div>
          </div>
        </div>
        <div>Brightness</div>
        <div>Sound</div>
        <div className="bg-rose-500 flex">
          <div className="bg-green-500 flex-[0.5]">Aeroplane mode</div>
          <div className="bg-yellow-500 flex-[0.5]">Dark Mode</div>
        </div>
        <div>Music</div>
      </Popover.Content>
    </Popover>
  );
}

export default Panel;

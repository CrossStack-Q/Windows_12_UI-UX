import React from "react";
import {
  Popover,
  User,
  Button,
  Progress,
  Grid,
  Input,
} from "@nextui-org/react";
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
          height: "48vh",
          outline: "none",
          padding: "$6",
          overflow: "hidden",
        }}
      >
        <div className="flex">
          <div className="flex-[0.5] bg-white rounded-lg bg-opacity-5 flex flex-col items-center">
            <div className="flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-28 h-28 text-white m-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="absolute text-white">63%</p>
            </div>
            <p className="text-white -mt-4">A Man Laptop</p>
            <p className="text-sm font-semibold text-gray-200">
              Available Time:4 hours
            </p>
          </div>
          <div className="flex flex-col flex-[0.5]">
            <div className="flex items-center p-1 m-1 bg-opacity-5 bg-white rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 m-2 rounded-full text-white bg-blue-400 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>

              <div className="m-1">
                <p className="text-white font-semibold">Wi-Fi</p>
                <p className="text-gray-300">Man</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-2 m-1 bg-white bg-opacity-5 rounded-lg">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 m-2 rounded-full text-white bg-blue-400 p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>
                <div>
                  <p className="text-white font-semibold">Bluetooth</p>
                  <p className="text-gray-300">On</p>
                </div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6 text-white m-2"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="m-2">
          <Progress color="primary" size="xl" value={78} />
        </div>
        <div className="m-2">
          <Progress color="primary" size="xl" value={78} />
        </div>
        <div className="flex">
          <div className="flex-[0.5]">
            <div className="flex items-center p-1 m-1 bg-opacity-5 bg-white rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8 m-2 rounded-full text-white bg-blue-400 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                />
              </svg>

              <div className="m-2">
                <p className="text-white font-semibold">Wi-Fi</p>
                <p className="text-gray-300">Man</p>
              </div>
            </div>
          </div>
          <div className="flex-[0.5]">
            <div className="flex-[0.5]">
              <div className="flex items-center p-1 m-1 bg-opacity-5 bg-white rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 m-2 rounded-full text-white bg-blue-400 p-1"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
                  />
                </svg>

                <div className="m-2">
                  <p className="text-white font-semibold">Wi-Fi</p>
                  <p className="text-gray-300">Man</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-400 flex flex-col flex-1 m-1 flex-grow">
          Now
        </div>
      </Popover.Content>
    </Popover>
  );
}

export default Panel;

import React from "react";
import {
  Popover,
  User,
  Button,
  Progress,
  Avatar,
  Grid,
  Input,
} from "@nextui-org/react";
import { useAppContext } from "../../../../../context/state";
import Image from "next/image";
import excel from "../../../../../public/excel.png";
import Music from "../../MusicPlayer/Music";

function Panel() {
  const { showBrowser, setShowBrowser, search, setSearch, panel, setPanel } =
    useAppContext();
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

      {panel == "panel" ? (
        <Popover.Content
          css={{
            backgroundColor: "rgba(0,0,0,0.6)",
            border: "0",
            display: "flex",
            flexDirection: "column",
            maxWidth: "30vw",
            height: "full",
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
                  <p className="text-gray-300">ON</p>
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
                    <p
                      onClick={() => {
                        setPanel("paneloff");
                      }}
                      className="text-white cursor-default font-semibold"
                    >
                      Bluetooth
                    </p>
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
          <div className="m-2 p-2 bg-white bg-opacity-5 rounded-md">
            <Progress color="primary" size="xl" value={78} />
          </div>
          <div className="m-2 p-2 bg-white bg-opacity-5 rounded-md">
            <Progress color="primary" size="xl" value={78} />
          </div>
          <div className="flex">
            <div className="flex-[0.5]">
              <div className="flex items-center p-1 m-1 bg-opacity-5 bg-white rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 bg-blue-400 rounded-full text-white p-1">
                  <path fill-rule="evenodd" d="M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
                </svg>


                <div className="m-2">
                  <p className="text-white font-semibold">Hotspot</p>
                  <p className="text-gray-300">OFF</p>
                </div>
              </div>
            </div>
            <div className="flex-[0.5]">
              <div className="flex-[0.5]">
                <div className="flex items-center p-1 m-1 bg-opacity-5 bg-white rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 bg-blue-400 rounded-full text-white p-1">
                    <path d="M6 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 111.5 0v7.5A.75.75 0 016 12zM18 12a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0118 12zM6.75 20.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM18.75 18.75v1.5a.75.75 0 01-1.5 0v-1.5a.75.75 0 011.5 0zM12.75 5.25v-1.5a.75.75 0 00-1.5 0v1.5a.75.75 0 001.5 0zM12 21a.75.75 0 01-.75-.75v-7.5a.75.75 0 011.5 0v7.5A.75.75 0 0112 21zM3.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0zM12 11.25a2.25 2.25 0 110-4.5 2.25 2.25 0 010 4.5zM15.75 15a2.25 2.25 0 104.5 0 2.25 2.25 0 00-4.5 0z" />
                  </svg>


                  <div className="m-2">
                    <p className="text-white font-semibold">Admin</p>
                    <p className="text-gray-300">Go</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white bg-white bg-opacity-5 rounded-lg flex m-1 p-2 gap-2 items-center">
            <Avatar
              src="https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/dp/Screenshot%20from%202023-01-15%2019-06-59.png"
              size="lg"
              zoomed
            />
            <div className="flex flex-col mx-2">
              <span className="text-lg font-semibold" >Shauq</span>
              <span className="text-base font-semibold" >Qala</span>
            </div>


            <Music />
          </div>
        </Popover.Content>
      ) : (
        <Popover.Content
          css={{
            backgroundColor: "rgba(0,0,0,0.6)",
            border: "0",
            display: "flex",
            flexDirection: "column",
            maxWidth: "30vw",
            height: "30vh",
            outline: "none",
            padding: "$6",
            overflow: "hidden",
          }}
        >
          <div className="text-white flex flex-col">
            <p className="m-1 p-1 flex gap-2 rounded-md items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
                onClick={() => {
                  setPanel("panel")
                }}
              >
                <path
                  fill-rule="evenodd"
                  d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-lg font-semibold" >Bluetooth</p>
            </p>
            <p className="m-1 p-2 px-4 bg-white rounded-md bg-opacity-5">
              Aman Ka Wireless Keyboard
            </p>
            <p className="m-1 p-2 px-4 bg-white rounded-md bg-opacity-5">
              Aman Ka Wireless Mouse
            </p>
            <p className="m-1 p-2 px-4 bg-white rounded-md bg-opacity-5">
              Aman Ka X-Box
            </p>
            <p className="m-1 p-2 px-4 bg-white rounded-md bg-opacity-5">
              Aman Ka PS5
            </p>
          </div>
        </Popover.Content>
      )}
    </Popover>
  );
}

export default Panel;

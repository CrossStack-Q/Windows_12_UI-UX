import React from "react";
import { useAppContext } from "../../../../context/state";
import word from "../../../../public/word.png";
import excel from "../../../../public/excel.png";
import point from "../../../../public/point.png";
import note from "../../../../public/note.png";
import ts from "../../../../public/ts.png";
import chrome from "../../../../public/chrome.png";
import firefox from "../../../../public/firefox.png";
import battery from "../../../../public/battery.png";
import wifi from "../../../../public/wifi.png";
import Image from "next/image";
import { Popover, User, Button, Grid, Input } from "@nextui-org/react";
import Menu from "./Popover/Menu";
import Panel from "./Popover/Panel";
import battery1 from "../../../../public/bat.png";
import wifi1 from "../../../../public/wif.png";
import folder from "../../../../public/folder.png"
import calculator from "../../../../public/calculator.png"
import { signIn, signOut, useSession } from "next-auth/react";

function Taskbar() {
  const date = new Date();

  const { data: session } = useSession();

  var month;

  switch (date.getMonth()) {
    case 0:
      month = "Jan";
      break;
    case 1:
      month = "Feb";
      break;
    case 2:
      month = "Mar";
      break;
    case 3:
      month = "Apr";
      break;
    case 4:
      month = "May";
      break;
    case 5:
      month = "June";
      break;
    case 6:
      month = "July";
      break;
    case 7:
      month = "Aug";
      break;
    case 8:
      month = "Sep";
      break;
    case 9:
      month = "Oct";
      break;
    case 10:
      month = "Nov";
      break;
    case 11:
      month = "Dec";
  }

  var day;
  switch (date.getDay()) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
      day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  var hour = date.getHours();
  if (hour > 12) {
    hour = hour - 12;
    if (hour < 10) {
      hour = "0" + hour;
    }
  }

  var minute = date.getMinutes();
  if (minute < 10) {
    minute = "0" + minute;
  }

  var ampm = date.getHours();
  var apm;
  if (ampm > 12) {
    apm = "PM";
  } else {
    apm = "AM";
  }

  const { showBrowser, setShowBrowser, search, setSearch , showFileEx, setShowFileEx, showCalculator, setShowCalculator } = useAppContext();
  
  return (
    <footer className="bg-zinc-900 w-[98vw] m-2 px-1 h-10 rounded-md py-2 flex justify-between items-center">
      <div className="flex gap-2 items-center">
        <div className="m-1 p-1">
          <Menu />
        </div>
        <div className="w-8 h-8 hover:w-9 hover:h-9">
          <Image alt="excel" src={excel} objectFit="cover" />
        </div>
        <div className="w-8 h-8 hover:w-9 hover:h-9">
          <Image alt="point" src={point} objectFit="cover" />
        </div>
        <div className="w-8 h-8 hover:w-9 hover:h-9">
          <Image alt="word" src={word} objectFit="cover" />
        </div>

        <div
          onClick={() => {
            if (showBrowser == "hidden") {
              setShowBrowser("show");
            } else {
              setShowBrowser("hidden");
            }
          }}
          className="w-8 h-8 hover:w-9 hover:h-9"
        >
          <Image alt="chrome" src={chrome} objectFit="cover" />
        </div>
        <div className="w-8 h-8 hover:w-9 hover:h-9">
          <Image alt="firefox" src={firefox} objectFit="cover" />
        </div>
        <div
        onClick={() => {
          if (showFileEx == "hidden") {
            setShowFileEx("show");
          } else {
            setShowFileEx("hidden");
          }
        }}
        className="w-8 h-8 hover:w-9 hover:h-9">
          <Image alt="folder" src={folder} objectFit="cover" />
        </div>

        <div
        onClick={() => {
          if (showFileEx == "hidden") {
            setShowCalculator("show");
          } else {
            setShowCalculator("hidden");
          }
        }}
        className="w-8 h-8 hover:w-9 hover:h-9">
          <Image alt="folder" src={calculator} objectFit="cover" />
        </div>
        
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <button
            onClick={() => {
              if (search == "hidden") {
                setSearch("showx");
              } else {
                setSearch("hidden");
              }
            }}
            className={`text-white border-2 px-1 rounded-md `}
          >
            Search
          </button>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <Panel />
        <div className="text-white text-lg">
          &nbsp;{day.slice(0, 3)},{date.getDate()}&nbsp;{month}&nbsp;
        </div>
        <div className="text-white text-lg">
          {hour}:{minute}&nbsp;{apm}&nbsp;
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-white"
          >
            <path
              fill-rule="evenodd"
              d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z"
              clip-rule="evenodd"
            />
          </svg>
        </div>

        <div className=" m-1 p-1">
          <Popover>
            <Popover.Trigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5 text-white"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </Popover.Trigger>
            <Popover.Content
              css={{
                px: "$4",
                py: "$4",
                backgroundColor: "$black",
                border: "0",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="flex flex-col gap-2">
                <button onClick={() => signOut()} className="bg-white bg-opacity-10 text-white text-base font-bold px-4 py-1 rounded-md">
                  Logout
                </button>
                <button className="bg-white bg-opacity-10 text-white text-base font-bold px-4 py-1 rounded-md">
                  Lock Screen
                </button>
                <button className="bg-white bg-opacity-10 text-white text-base font-bold px-4 py-1 rounded-md">
                  Else
                </button>
              </div>
            </Popover.Content>
          </Popover>
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;

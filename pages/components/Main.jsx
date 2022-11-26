import React from "react";
import word from "../../public/word.png";
import excel from "../../public/excel.png";
import point from "../../public/point.png";
import note from "../../public/note.png";
import ts from "../../public/ts.png";
import chrome from "../../public/chrome.png";
import firefox from "../../public/firefox.png";
import battery from "../../public/battery.png";
import wifi from "../../public/wifi.png";

import battery1 from "../../public/bat.png";
import wifi1 from "../../public/wif.png";

import Head from "next/head";
import Image from "next/image";

import { Popover, User, Button, Grid } from "@nextui-org/react";

import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";

const people = [
  { id: 1, name: "Adobe Illustrator CC 2021" },
  { id: 2, name: "Adobe Photoshop CC 2021" },
  { id: 3, name: "Adobe After Effects CC 2021" },
];

function Main() {
  const date = new Date();
  console.log(date);

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

  //   Search walal j

  const [selected, setSelected] = useState("");
  const [query, setQuery] = useState("");

  const [search, setSearch] = useState("hidden");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );

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
        <div className="search bg-black bg-opacity-50 rounded-md">
          <div className={`w-[30vw] p-4 ${search} `}>
            <Combobox value={selected} onChange={setSelected}>
              <div className="relative mt-1">
                <div className="relative w-full cursor-default overflow-hidden rounded-lg text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                  <Combobox.Input
                    className="w-full bg-white bg-opacity-10 border-none py-2 pl-3 pr-10 text-sm leading-5 text-white focus:ring-0"
                    displayValue={(person) => person.name}
                    onChange={(event) => setQuery(event.target.value)}
                  />
                  {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                    
                  </Combobox.Button> */}
                </div>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                  afterLeave={() => setQuery("")}
                >
                  <Combobox.Options className="absolute -ml-4 mt-4 max-h-60 w-[30vw] overflow-auto rounded-md px-6 pb-4 bg-black bg-opacity-50 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {filteredPeople.length === 0 && query !== "" ? (
                      <div className="relative cursor-default select-none py-2 px-4 text-white">
                        Nothing found.
                      </div>
                    ) : (
                      filteredPeople.map((person) => (
                        <Combobox.Option
                          key={person.id}
                          className={({ active }) =>
                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                              active
                                ? "bg-white bg-opacity-20 rounded-xl text-white"
                                : "text-white"
                            }`
                          }
                          value={person}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {person.name}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                                      clip-rule="evenodd"
                                    />
                                  </svg>
                                </span>
                              ) : null}
                            </>
                          )}
                        </Combobox.Option>
                      ))
                    )}
                  </Combobox.Options>
                </Transition>
              </div>
            </Combobox>
          </div>
        </div>
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
      <footer className="bg-zinc-900 w-[98vw] m-2 px-1 h-10 rounded-md py-2 flex justify-between items-center">
        <div className="flex gap-2 items-center">
          
          <div className=" m-1 p-1">
            <Popover>
              <Popover.Trigger>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 hover:w-7 hover:h-7 text-white"
            >
              <path
                fill-rule="evenodd"
                d="M3 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 5.25zm0 4.5A.75.75 0 013.75 9h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 9.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75zm0 4.5a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
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
                  minWidth:"34vw",
                  outline:"none",
                }}
              >
                <div className="flex flex-col gap-2">
                  <div className="flex justify-evenly gap-2">
                    <button className="text-white flex font-semibold">
                      Power
                    </button>
                    <button className="text-white flex font-semibold">
                      Control Panel
                    </button>
                    <button className="text-white flex font-semibold">
                      Settings
                    </button>
                    <button className="text-white flex font-semibold">
                      Recycle Bin
                    </button>
                  </div>
                </div>
              </Popover.Content>
            </Popover>
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
          <div className="w-8 h-8 hover:w-9 hover:h-9">
            <Image alt="chrome" src={chrome} objectFit="cover" />
          </div>
          <div className="w-8 h-8 hover:w-9 hover:h-9">
            <Image alt="firefox" src={firefox} objectFit="cover" />
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
                  <button className="bg-white bg-opacity-10 text-white text-base font-bold px-4 py-1 rounded-md">
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
    </div>
  );
}

export default Main;

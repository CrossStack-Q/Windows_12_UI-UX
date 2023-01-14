import React, { useState } from "react";
import Sidebar from "./Sidebar/Sidebar"
import MainThing from "./Main/MainThing"
import { useAppContext } from "../../../../context/state";

function File() {
    const {showFileEx, setShowFileEx} = useAppContext();
    const [heightNow,setHeightNow] = useState("h-[60vh]")
    const [widthNow,setWidthNow] = useState("w-[60vw]")
    // let heightnow="h-[60vh]"
    // let widthnow="w-[60vw]"
  return (
    <div className={`bg-slate-100 ${showFileEx} absolute flex ${widthNow} ${heightNow}  flex-col`}>
      <div className="flex-[0.06] flex">
        <div className="flex gap-1 flex-[0.3] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Documents</p>
        </div>
        <div className="flex-[0.7] flex ml-4 mr-2 items-center justify-between">
          <div className="bittonsf">buttons</div>
          <div className=" gap-1 -ml-1 flex items-center">
            <div
              className="w-6 h-6" 
              onClick={() => {
                if (showFileEx == "hidden") {
                    setShowFileEx("show");
                } else {
                    setShowFileEx("hidden");
                }
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-green-600"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-6 h-6 full-screenj"
            onClick={() => {
              if (widthNow == "w-[60vw]") {
                  setWidthNow("w-[100vw]");
                  setHeightNow("h-[96vh]")
              } else {
                setWidthNow("w-[60vw]");
                setHeightNow("h-[60vh]")
              }
            }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-orange-500"
              >
                <path d="M16.5 6a3 3 0 00-3-3H6a3 3 0 00-3 3v7.5a3 3 0 003 3v-6A4.5 4.5 0 0110.5 6h6z" />
                <path d="M18 7.5a3 3 0 013 3V18a3 3 0 01-3 3h-7.5a3 3 0 01-3-3v-7.5a3 3 0 013-3H18z" />
              </svg>
            </div>

            <div className="w-6 h-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  fill-rule="evenodd"
                  d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-[0.94] flex">
        <div className="flex flex-col flex-[0.2] m-2 bg-white rounded-lg">
            <Sidebar/>
        </div>
        <div className="flex flex-col flex-[0.8] m-2 bg-white rounded-lg">
            <MainThing/>
        </div>
      </div>
    </div>
  );
}

export default File;

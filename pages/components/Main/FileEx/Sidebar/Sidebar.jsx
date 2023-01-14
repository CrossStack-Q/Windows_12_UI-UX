import React from "react";

function Sidebar() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-1">
        <p className="px-2 text-gray-600 font-bold">Fast access</p>
        <div className="flex px-2 py-1   gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Desktop</p>
        </div>
        <div className="flex px-2 py-1   gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-purple-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Documents</p>
        </div>
        <div className="flex px-2 py-1   gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-rose-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Des</p>
        </div>
        <div className="flex px-2 py-1   gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-purple-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Work</p>
        </div>
        <div className="flex px-2 py-1   gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-green-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>Aman</p>
        </div>
      </div>
      <div className="cloud mt-2">
        <div className="flex justify-between px-2 items-center text-gray-600 font-bold">
          <span>Cloud</span>
          <span>||</span>
        </div>
        <div className="flex px-2 py-1   gap-1 items-center">
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
          <p>Onedrive</p>
        </div>
        <div className="flex px-2 py-1   gap-1 items-center">
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
          <p>Google Drive</p>
        </div>
      </div>
      <div>
        <div className="flex px-2 py-1   gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-6 h-6 text-yellow-500"
          >
            <path
              fill-rule="evenodd"
              d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
              clip-rule="evenodd"
            />
          </svg>
          <p>My computer</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;

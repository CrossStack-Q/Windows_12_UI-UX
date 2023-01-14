import React from "react";

function FolderCard({foldername,foldercolour}) {
  return (
    <div className="bg-white flex flex-col items-center p-1 rounded-md bg-opacity-20 w-24 h-24 m-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        class={`w-20 h-20 ${foldercolour}`}
      >
        <path
          fill-rule="evenodd"
          d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z 12.75a.75.75 0 000 1.5h6a.75.75 0 000-1.5H9z"
          clip-rule="evenodd"
        />
      </svg>
      <p className="text-base font-medium px-2" >{foldername}</p>
    </div>
  );
}

export default FolderCard;

import React from "react";
import { Input, Spacer } from "@nextui-org/react";
import { useAppContext } from "../../../../context/state";


function Browser() {

  const {showBrowser, setShowBrowser} = useAppContext();
  return (
    <div className={`bg-white ${showBrowser} flex flex-col items-center w-[60vw] h-[60vh]`}>
      <header className=" justify-between w-full bg-zinc-800 flex text-lg p-2">
        <div className=" gap-1 -ml-1 flex items-center">
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
          <div className="w-6 h-6">
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
          <div className="w-6 h-6" onClick={()=>{
          if(showBrowser =="hidden"){
            setShowBrowser("show")
          }else{
            setShowBrowser("hidden")
          }
        }} >
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
        </div>
        <div className="w-[60%]">
          <Input
            readOnly
            status="error"
            css={{ color: "$gray200", backgroundColor:"#252628" }}
            fullWidth
            placeholder="http://ama.ng"
            initialValue="http://ama.ng"
          />
        </div>
        <button className="mx-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-8 h-8 p-1 bg-zinc-900 rounded-md text-gray-200 "
          >
            <path d="M6 3a3 3 0 00-3 3v2.25a3 3 0 003 3h2.25a3 3 0 003-3V6a3 3 0 00-3-3H6zM15.75 3a3 3 0 00-3 3v2.25a3 3 0 003 3H18a3 3 0 003-3V6a3 3 0 00-3-3h-2.25zM6 12.75a3 3 0 00-3 3V18a3 3 0 003 3h2.25a3 3 0 003-3v-2.25a3 3 0 00-3-3H6zM17.625 13.5a.75.75 0 00-1.5 0v2.625H13.5a.75.75 0 000 1.5h2.625v2.625a.75.75 0 001.5 0v-2.625h2.625a.75.75 0 000-1.5h-2.625V13.5z" />
          </svg>
        </button>
      </header>
      <main className="bg-[url('https://raw.githubusercontent.com/Cross-Rehk/Some_Extra_files/main/brow.png')] 
      
bg-cover
bg-center
      h-full w-full flex-1">main</main>
    </div>
  );
}

export default Browser;

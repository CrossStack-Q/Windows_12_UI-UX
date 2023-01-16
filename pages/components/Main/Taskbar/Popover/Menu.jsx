import React from 'react'
import { Popover, User, Button, Grid, Input } from "@nextui-org/react";
import { useAppContext } from '../../../../../context/state';
import Image from "next/image";
import word from "../../../../../public/word.png";
import excel from "../../../../../public/excel.png";
import point from "../../../../../public/point.png";
import note from "../../../../../public/note.png";
import ts from "../../../../../public/ts.png";
import chrome from "../../../../../public/chrome.png";
import firefox from "../../../../../public/firefox.png";
import aman from "../../../../../public/aman.png";

import app1 from "../../../../../public/app1.png";
import app2 from "../../../../../public/app2.png";
import app3 from "../../../../../public/app3.png";
import app4 from "../../../../../public/app4.png";
import app5 from "../../../../../public/app5.png";
import app6 from "../../../../../public/app6.png";
import app7 from "../../../../../public/app7.png";
import app8 from "../../../../../public/app8.png";
import app9 from "../../../../../public/app9.png";
import app10 from "../../../../../public/app10.png";
import app11 from "../../../../../public/app11.png";
import app12 from "../../../../../public/app12.png";
import app13 from "../../../../../public/app13.png";
import app14 from "../../../../../public/app14.png";
import app15 from "../../../../../public/app15.png";
import app16 from "../../../../../public/app16.png";
import app17 from "../../../../../public/app17.png";
import app18 from "../../../../../public/app18.png";





function Menu() {
  const { showBrowser, setShowBrowser, search, setSearch } = useAppContext();
  return (
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
                backgroundColor: "rgba(0,0,0,0.3)",
                border: "0",
                display: "flex",
                flexDirection: "column",
                minWidth: "30vw",
                outline: "none",
                padding:"$6",
                overflow:"hidden",
              }}
            >
              <div className="flex flex-col gap-2 ">
                <div className="  flex justify-center mt-6 w-full">
                  <div className="w-20 h-20 overflow-visible">
                    <Image
                      className="rounded-full border-2 border-zinc-900"
                      alt="excel"
                      src={aman}
                      objectFit="cover"
                    />
                  </div>
                  <div className="flex flex-col justify-center ">
                    <span className="w-full m-2 text-center text-lg text-white">
                      Aman Nagar
                    </span>
                    <span className="text-gray-400 m-2 text-center w-full -mt-2">
                      mainmain@mail.com
                    </span>
                  </div>
                </div>

                <div className="flex justify-evenly gap-5 pt-6 pb-2 px-8">
                  <button className="text-white flex items-center font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-5 mt-1 h-5"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="">&nbsp;Power</span>
                  </button>
                  <button className="text-white flex items-center font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 mt-1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    &nbsp;Control Panel
                  </button>
                  <button className="text-white items-center flex font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 mt-1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M11.078 2.25c-.917 0-1.699.663-1.85 1.567L9.05 4.889c-.02.12-.115.26-.297.348a7.493 7.493 0 00-.986.57c-.166.115-.334.126-.45.083L6.3 5.508a1.875 1.875 0 00-2.282.819l-.922 1.597a1.875 1.875 0 00.432 2.385l.84.692c.095.078.17.229.154.43a7.598 7.598 0 000 1.139c.015.2-.059.352-.153.43l-.841.692a1.875 1.875 0 00-.432 2.385l.922 1.597a1.875 1.875 0 002.282.818l1.019-.382c.115-.043.283-.031.45.082.312.214.641.405.985.57.182.088.277.228.297.35l.178 1.071c.151.904.933 1.567 1.85 1.567h1.844c.916 0 1.699-.663 1.85-1.567l.178-1.072c.02-.12.114-.26.297-.349.344-.165.673-.356.985-.57.167-.114.335-.125.45-.082l1.02.382a1.875 1.875 0 002.28-.819l.923-1.597a1.875 1.875 0 00-.432-2.385l-.84-.692c-.095-.078-.17-.229-.154-.43a7.614 7.614 0 000-1.139c-.016-.2.059-.352.153-.43l.84-.692c.708-.582.891-1.59.433-2.385l-.922-1.597a1.875 1.875 0 00-2.282-.818l-1.02.382c-.114.043-.282.031-.449-.083a7.49 7.49 0 00-.985-.57c-.183-.087-.277-.227-.297-.348l-.179-1.072a1.875 1.875 0 00-1.85-1.567h-1.843zM12 15.75a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    &nbsp;Settings
                  </button>
                  <button className="text-white flex items-center font-semibold">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-5 h-5 mt-1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.5 4.478v.227a48.816 48.816 0 013.878.512.75.75 0 11-.256 1.478l-.209-.035-1.005 13.07a3 3 0 01-2.991 2.77H8.084a3 3 0 01-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 01-.256-1.478A48.567 48.567 0 017.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 013.369 0c1.603.051 2.815 1.387 2.815 2.951zm-6.136-1.452a51.196 51.196 0 013.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 00-6 0v-.113c0-.794.609-1.428 1.364-1.452zm-.355 5.945a.75.75 0 10-1.5.058l.347 9a.75.75 0 101.499-.058l-.346-9zm5.48.058a.75.75 0 10-1.498-.058l-.347 9a.75.75 0 001.5.058l.345-9z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    &nbsp;Recycle Bin
                  </button>
                </div>
                <input
                  type="text"
                  className="bg-white mx-4 my-4 px-2 py-1 rounded-md bg-opacity-20 text-gray-200"
                  placeholder="Search for files and applications"
                />
                <div className="mainappdrawer bg-black px-12 -mb-6 -ml-6 -mr-6 bg-opacity-70">
                  <p className="text-gray-200 my-2">Recent Apps</p>
                  <div className="flex gap-4 mt-2 mb-2 justify-between">
                    <div className="w-12 h-12 m-2 flex flex-col items-center hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={word} objectFit="cover" />
                      <p className="text-white text-sm" >Word</p>                    
                    </div>
                    <div className="w-12 h-12 flex flex-col items-center  m-2 hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={excel} objectFit="cover" />
                      <p className="text-white text-sm" >Excel</p>  
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={point} objectFit="cover" />
                      <p className="text-white text-sm" >PowerPoint</p>  
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={note} objectFit="cover" />
                      <p className="text-white text-sm" >Onenote</p>  
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={ts} objectFit="cover" />
                      <p className="text-white text-sm" >Teams</p>  
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 mb-2 justify-between">
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={chrome} objectFit="cover" />
                      <p className="text-white text-sm" >Chrome</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={firefox} objectFit="cover" />
                      <p className="text-white text-sm" >Firefox</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={app16} objectFit="cover" />
                      <p className="text-white text-sm" >Python</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={app18} objectFit="cover" />
                      <p className="text-white text-sm" >Android</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={app17} objectFit="cover" />
                      <p className="text-white text-sm" >AmanWeb</p>
                    </div>
                  </div>
                  <p className="text-gray-200 mt-4">All Apps</p>
                  <div className="overflow-scroll hidescrool h-[17vh] mb-6">
                    <div className="flex gap-4 mt-2 mb-2 justify-between">
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app1} objectFit="cover" />
                      <p className="text-white text-sm" >Store</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app2} objectFit="cover" />
                      <p className="text-white text-sm" >Codeo</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app3} objectFit="cover" />
                      <p className="text-white text-sm" >C#</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app4} objectFit="cover" />
                      <p className="text-white text-sm" >AmanDB</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app5} objectFit="cover" />
                      <p className="text-white text-sm" >Acrobat</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2 mb-2 justify-between">
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app6} objectFit="cover" />
                      <p className="text-white text-sm" >UXDesign</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app7} objectFit="cover" />
                      <p className="text-white text-sm" >Illustrator</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app8} objectFit="cover" />
                      <p className="text-white text-sm" >Indesign</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app9} objectFit="cover" />
                      <p className="text-white text-sm" >Lightroom</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app10} objectFit="cover" />
                      <p className="text-white text-sm" >PhotoShop</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2 mb-2 justify-between">
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app11} objectFit="cover" />
                      <p className="text-white text-sm" >VScode</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app12} objectFit="cover" />
                      <p className="text-white text-sm" >Notes</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app13} objectFit="cover" />
                      <p className="text-white text-sm" >Terminal</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app14} objectFit="cover" />
                      <p className="text-white text-sm" >Superkio</p>
                      </div>
                      <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                        <Image alt="excel" src={app15} objectFit="cover" />
                      <p className="text-white text-sm" >AfterEffects</p>
                      </div>
                    </div>
                    <div className="flex gap-4 mt-2 mb-2 justify-between">
                    <div className="w-12 h-12 m-2 flex flex-col items-center hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={word} objectFit="cover" />
                      <p className="text-white text-sm" >Word</p>                    
                    </div>
                    <div className="w-12 h-12 flex flex-col items-center  m-2 hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={excel} objectFit="cover" />
                      <p className="text-white text-sm" >Excel</p>  
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={point} objectFit="cover" />
                      <p className="text-white text-sm" >PowerPoint</p>  
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={note} objectFit="cover" />
                      <p className="text-white text-sm" >Onenote</p>  
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={ts} objectFit="cover" />
                      <p className="text-white text-sm" >Teams</p>  
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 mb-2 justify-between">
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={chrome} objectFit="cover" />
                      <p className="text-white text-sm" >Chrome</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={firefox} objectFit="cover" />
                      <p className="text-white text-sm" >Firefox</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={app16} objectFit="cover" />
                      <p className="text-white text-sm" >Python</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={app18} objectFit="cover" />
                      <p className="text-white text-sm" >Android</p>
                    </div>
                    <div className="w-12 h-12 m-2 flex flex-col items-center  hover:bg-zinc-700 rounded-md p-1">
                      <Image alt="excel" src={app17} objectFit="cover" />
                      <p className="text-white text-sm" >AmanWeb</p>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </Popover.Content>
          </Popover>
  )
}

export default Menu
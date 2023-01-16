import React from "react";
import FolderCard from "./FolderCard";
import { Dropdown, Button } from "@nextui-org/react";

function MainThing() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <div className="m-2 flex items-center">
            <div>
                arrows
            </div>
            <Dropdown>
              <Dropdown.Button flat>Edit</Dropdown.Button>
              <Dropdown.Menu aria-label="Static Actions">
                <Dropdown.Item key="new">New file</Dropdown.Item>
                <Dropdown.Item key="copy">Copy link</Dropdown.Item>
                <Dropdown.Item key="edit">Edit file</Dropdown.Item>
                <Dropdown.Item key="delete" color="error">
                  Delete file
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
        <div className="m-2">
            <div className="flex border-2 rounded-lg">
                <button className="bg-gray-400 px-2 rounded-tl-lg rounded-bl-lg">
                    All
                </button>
                <button className="px-2">
                    Shared
                </button>
                <button className="px-2">
                    Private
                </button>
            </div>
        </div>
      </div>
      <div className="flex flex-wrap">
        <FolderCard foldername="Programs" foldercolour="text-yellow-500" />
        <FolderCard foldername="Parul Mam" foldercolour="text-yellow-500" />
        <FolderCard foldername="Aman" foldercolour="text-purple-500" />
        <FolderCard foldername="Sharma" foldercolour="text-yellow-500" />
        <FolderCard foldername="Ravi" foldercolour="text-blue-500" />
      </div>
    </div>
  );
}

export default MainThing;

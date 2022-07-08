import React, { useEffect, useState } from "react";
import {
  HeartIcon,
  HomeIcon,
  LibraryIcon,
  PlusCircleIcon,
  RssIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import { signOut, useSession } from "next-auth/react";
import useSpotify from "../hooks/useSpotify";

function Sidebar() {
  const spotifyApi = useSpotify();
  const { data: session, status } = useSession();
  const [palyList, setPlayList] = useState([]);
  const [playListId, setPlayListId] = useState(null);

  useEffect(() => {
    if (spotifyApi.getAccessToken()) {
      spotifyApi.getUserPlaylists().then((data) => {
        setPlayList(data.body.items);
      });
    }
  }, [session, spotifyApi]);

  // console.log(palyList.body.items);
  return (
    <div className=" text-gray-500 p-5 text-sm border-r border-gray-900 overflow-y-scroll h-screen scrollbar-hide">
      <div className=" space-y-4">
        <button
          onClick={() => signOut()}
          className="flex items-center space-x-2 hover:text-white"
        >
          <HomeIcon className="h-5 w-5" />
          <p>Logout</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className=" border-t-[0.1px] border-gray-500" />
        {/* itsSide //////// */}
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5" />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5" />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5" />
          <p>Your episodes</p>
        </button>
        <hr className=" border-t-[0.1px] border-gray-500" />

        {palyList ? (
          palyList.map((playlis) => (
            <p
              key={playlis.id}
              onClick={() => setPlayListId(playlis.id)}
              className=" cursor-pointer hover:text-white"
            >
              {" "}
              {playlis.name}{" "}
            </p>
          ))
        ) : (
          <p className="text-red-500 ">PlayList is loding .....</p>
        )}
      </div>
    </div>
  );
}

export default Sidebar;

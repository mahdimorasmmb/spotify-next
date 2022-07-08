import { ChevronDownIcon } from "@heroicons/react/outline";
import { shuffle } from "lodash";
import { useSession } from "next-auth/react";
import Image from "next/future/image";
import React, { useEffect, useState } from "react";

const colors = [
  "from-indigo-500",
  "from-blue-500",
  "Ifrom-green-500",
  "from-red-500",
  "from-yellow-500",
  "from-pink-500",
  "from-purple-500",
];

function Center() {
  const { data: session } = useSession();
  const [color, setColor] = useState(null);

  useEffect(() => {
    setColor(shuffle(colors).pop());
  }, []);
  return (
    <div className="  flex-grow text-white">
      <header className=" absolute top-5 right-8 ">
        <div className=" flex items-center bg-red-300 space-x-3 opacity-90  hover:opacity-80 cursor-pointer rounded-full p-1 pr-2">
          <Image
            layout="intrinsic"
            className=" rounded-full bg-white"
            width={40}
            height={40}
            src={
              session?.user.image
                ? session?.user.image
                : "/avatar-svgrepo-com.svg"
            }
            alt="profile Image"
          />
          <h2 className=" text-black text-xl">
            {session?.user.name ? session?.user.name : "user name"}
          </h2>
          <ChevronDownIcon className="h-5 w-5" />
        </div>
      </header>
      <section
        className={`flex items-end space-x-7 bg-gradient-to-b to-black ${color} h-80 text-white p-8 w-full`}
      >
        <h1>Hwllo</h1>
      </section>
    </div>
  );
}

export default Center;

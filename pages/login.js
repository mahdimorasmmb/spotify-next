import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Image from "next/image";

function Login({ providers }) {
  return (
    <div className="flex flex-col items-center bg-black  min-h-screen w-full justify-center">
      <Image
        alt="logo"
        width={206}
        height={206}
        className=""
        src="https://links.papareact.com/9xl"
      />
      {providers &&
        Object.values(providers).map((provider) => (
          <div className=" mt-5" key={provider.name}>
            <button
              onClick={() => signIn(provider.id, { callbackUrl: "/" })}
              className=" bg-[#18D860] text-white p-5 rounded-full"
            >
              Login with {provider.name}
            </button>
          </div>
        ))}
    </div>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers,
    },
  };
}

import React from "react";
import { getProviders } from "next-auth/react";

function Login({ provider }) {
  console.log(provider);
  return <div>Login page</div>;
}

export default Login;

export async function getServerSideProps() {
  const provider = await getProviders();

  return {
    props: {
      provider,
    },
  };
}

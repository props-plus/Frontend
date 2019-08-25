import React from "react";
import { useAuth0 } from "../Auth/auth0.js";

export default function Login() {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <>
      {/* eslint-disable-next-line */}
      {!isAuthenticated && <a onClick={() => loginWithRedirect({})}>Sign-In</a>}
      {/* eslint-disable-next-line */}
      {isAuthenticated && <a onClick={() => logout()}>Log Out</a>}
    </>
  );
}

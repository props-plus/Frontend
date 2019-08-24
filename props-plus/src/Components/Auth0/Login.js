import React from "react";
import { useAuth0 } from "../Auth0/auth0-wrapper";

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

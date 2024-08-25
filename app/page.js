"use client";
import Card from "./components/Card";
import Base from "./components/Base";
import Login from "./components/Login";
import { AuthContext } from "./context/auth";
import { useContext } from "react";
export default function Home() {
  const { tokens } = useContext(AuthContext);
  return (
    <>
      {tokens ? (
        <>
          <Base />
          <Card />
        </>
      ) : (
        <Login />
      )}
    </>
  );
}

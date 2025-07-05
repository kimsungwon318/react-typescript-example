import React from "react";
import ChildC from "./ChildC";

export default function ChildB() {
  console.log("ChildB");

  return (
    <>
      <h1>ChildB Componet</h1>
      <ChildC />
    </>
  );
}

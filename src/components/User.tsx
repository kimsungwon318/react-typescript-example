import React from "react";

export default function User(props: { name: string; age: number }) {
  return (
    <div>
      <div>name: {props.name}</div>
      <div>age: {props.age}</div>
    </div>
  );
}

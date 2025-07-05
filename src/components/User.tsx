import React from "react";

export default function User({
  userObj: { name, age, gender },
}: {
  userObj: {
    name: string;
    age: number;
    gender: string;
  };
}) {
  return (
    <div>
      <div>name: {name}</div>
      <div>age: {age}</div>
      <div>gender: {gender}</div>
    </div>
  );
}

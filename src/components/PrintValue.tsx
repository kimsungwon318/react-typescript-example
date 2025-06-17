import React from "react";

export default function PrintValue(props: {
  numberValue: number;
  stringValue: string;
  booleanValue: boolean;
  arrayValue: number[];
  objectValue: { name: string; age: number };
  handleClick: () => void;
}) {
  return (
    <div>
      <div>{props.numberValue}</div>
      <div>{props.stringValue}</div>
      <div>{props.booleanValue.toString()}</div>
      <div>{props.arrayValue}</div>
      <div>{JSON.stringify(props.objectValue)}</div>
      <div>{props.handleClick.toString()}</div>
    </div>
  );
}

export default function PrintValue(props: PrintValueProps) {
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

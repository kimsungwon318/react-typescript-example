export default function Button(props: {
  aa: (message: string) => void;
  message: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <button onClick={() => props.aa(props.message)}>{props.children}</button>
    </div>
  );
}

import React, { useState } from "react";
import Input from "./html/Input";
import Button from "./html/Button";

export default function TodoEditor({
  addTodo,
}: {
  addTodo: (text: string) => void;
}) {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") return;
    addTodo(text);
    setText("");
  };
  return (
    <form className="todo__form" onSubmit={handleSubmit}>
      <div className="todo__editor">
        <Input
          type="text"
          className="todo__input"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button className="todo__button" type="submit">
          Add
        </Button>
      </div>
    </form>
  );
}

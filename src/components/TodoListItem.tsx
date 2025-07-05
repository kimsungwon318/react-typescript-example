import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import Checkbox from "./html/Checkbox";
import Input from "./html/Input";
import { useState } from "react";

export default function TodoListItem({
  todo,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: {
  todo: Todo;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
}) {
  const [isModify, setIsModify] = useState(false);
  const [modifyText, setModifyText] = useState("");
  const modifyHandler = () => {
    setIsModify((isModify) => !isModify);
    setModifyText((modifyText) => (modifyText === "" ? todo.text : modifyText));
    if (modifyText.trim() !== "" && todo.text !== modifyText) {
      modifyTodo(todo.id, modifyText);
    }
  };
  return (
    <li className={`todo__item ${todo.completed && "todo__item--complete"}`}>
      {!isModify && (
        <Checkbox
          parentClassName="todo__checkbox-group"
          type="checkbox"
          className="todo__checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </Checkbox>
      )}

      {/* update */}
      {isModify && (
        <input
          type="text"
          className="todo__modify-input"
          value={modifyText}
          onChange={(e) => setModifyText(e.target.value)}
        />
      )}

      <div className="todo__button-group">
        <Button className="todo__action-button" onClick={modifyHandler}>
          <SvgPencil />
        </Button>
        <Button
          className="todo__action-button"
          onClick={() => deleteTodo(todo.id)}
        >
          <SvgClose />
        </Button>
      </div>
    </li>
  );
}

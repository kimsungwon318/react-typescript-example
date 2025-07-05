import Checkbox from "./html/Checkbox";
import Button from "./html/Button";
import SvgPencil from "./svg/SvgPencil";
import SvgClose from "./svg/SvgClose";
import TodoListItem from "./TodoListItem";
import TodoListEmpty from "./TodoListEmpty";

export default function TodoList({
  todos,
  toggleTodo,
  deleteTodo,
  modifyTodo,
}: {
  todos: Todo[];
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
  modifyTodo: (id: number, text: string) => void;
}) {
  return (
    <ul className="todo__list">
      {/* <!-- 할 일 목록이 없을 때 --> */}
      {todos.length === 0 && <TodoListEmpty />}
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          modifyTodo={modifyTodo}
        />
      ))}
      {/* <!-- 할 일 목록이 있을 때 --> */}
    </ul>
  );
}

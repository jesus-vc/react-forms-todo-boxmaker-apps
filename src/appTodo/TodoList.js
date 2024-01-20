import NewTodoForm from "./NewTodoForm";
import { useState } from "react";
import Todo from "./Todo";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks((tasks) => [...tasks, newTask]);
  };

  const removeTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const todoComponents = tasks.map(({ id, newTask }) => (
    <Todo key={id} task={newTask} removeTask={() => removeTask(id)}></Todo>
  ));

  return (
    <div>
      <ul>{todoComponents}</ul>
      <NewTodoForm addTask={addTask}></NewTodoForm>
    </div>
  );
};

export default TodoList;

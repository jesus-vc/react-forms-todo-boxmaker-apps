const Todo = ({ task, removeTask }) => {
  const handleClick = () => {
    removeTask();
  };

  return (
    <div>
      <p className="newTask">{task}</p>
      <button onClick={handleClick}>X</button>
    </div>
  );
};

export default Todo;

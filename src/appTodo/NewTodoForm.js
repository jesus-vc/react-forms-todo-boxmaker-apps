import { useState } from "react";
import { v4 as uuid } from "uuid";

const NewTodoForm = ({ addTask }) => {
  const INITIAL_STATE = {
    newTask: "",
  };

  const [formData, setForm] = useState(INITIAL_STATE);

  const handleSubmit = (evt) => {
    evt.preventDefault();

    addTask({ ...formData, id: uuid() });
    setForm(INITIAL_STATE);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setForm((prevFormState) => ({ ...prevFormState, [name]: value }));
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="newTask">New Task:</label>
            <br></br>
            <input
              id="newTask"
              type="text"
              name="newTask"
              value={formData.newTask}
              onChange={handleChange}
            ></input>
          </div>
          <button id="newTaskButton">Add New Task!</button>
        </form>
      </div>
    </>
  );
};

export default NewTodoForm;

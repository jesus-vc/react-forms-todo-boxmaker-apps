import { useState } from "react";

const NewBoxForm = ({ addBox }) => {
  const initialState = {
    backgroundColor: "",
    width: "",
    height: "",
  };

  const [formState, setForm] = useState(initialState);

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setForm((prevFormState) => ({
      ...prevFormState,
      [name]: value,
    }));
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    addBox({ ...formState });
    setForm(initialState);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="width">Width</label>
          <input
            id="width"
            type="text"
            name="width"
            value={formState.width}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input
            id="height"
            type="text"
            name="height"
            value={formState.height}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input
            id="backgroundColor"
            type="text"
            name="backgroundColor"
            value={formState.backgroundColor}
            onChange={handleChange}
          />
        </div>
        <button>Add a box!</button>
      </form>
    </div>
  );
};

export default NewBoxForm;

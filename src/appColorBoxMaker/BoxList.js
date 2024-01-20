import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { useState } from "react";
import "./BoxList.css";

import { v4 as uuid } from "uuid";

const BoxList = ({ boxCount }) => {
  const createBoxes = () => {
    return Array.from({ length: boxCount }, () => ({
      id: uuid(),
      backgroundColor: "grey",
      width: "50px",
      height: "50px",
    }));
  };

  const [boxesState, setBoxes] = useState(createBoxes());

  const removeBox = (id) => {
    setBoxes((prevBoxesState) => prevBoxesState.filter((box) => box.id !== id));
  };

  const addBox = (newBox) => {
    setBoxes((prevBoxesState) => [
      ...prevBoxesState,
      {
        id: uuid(),
        ...newBox,
      },
    ]);
  };

  const boxComponents = boxesState.map(
    ({ id, backgroundColor, width, height }) => (
      <Box
        key={id}
        backgroundColor={backgroundColor}
        width={width}
        height={height}
        removeBox={() => removeBox(id)}
      ></Box>
    )
  );

  return (
    <div className="BoxList">
      <NewBoxForm addBox={addBox}></NewBoxForm>
      {boxComponents}
    </div>
  );
};

export default BoxList;

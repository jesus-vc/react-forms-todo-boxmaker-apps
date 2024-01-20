import "./Box.css";

const Box = ({ removeBox, backgroundColor, width, height }) => {
  return (
    <>
      <div
        className="Box"
        data-testid="singleBox"
        style={{
          backgroundColor: backgroundColor,
          width: width,
          height: height,
        }}
      ></div>
      <button className="Box-Button" onClick={removeBox}>
        X
      </button>
    </>
  );
};

export default Box;

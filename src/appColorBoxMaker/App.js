import "./App.css";

import BoxList from "./BoxList";

function App() {
  return (
    <div className="ColorBoxApp">
      <BoxList boxCount={20}></BoxList>
    </div>
  );
}

export default App;

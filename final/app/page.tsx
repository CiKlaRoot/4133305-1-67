import Basic from "@/components/Basic";
import React  from "react";
import Hook from "../components/Hook";

const App:React.FC = () => {

  return (
      <>
      <h1>WellCOmetoBRU</h1>
      <p>Hello</p>
      <Basic initVal='20' />
      <Hook initHook="5" />
      </>
  );
};

export default App;

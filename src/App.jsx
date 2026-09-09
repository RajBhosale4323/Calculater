import Display from "./componants/Display";
import Buttons from "./componants/Buttens";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  let [calVal, setVal] = useState("");
  const User_Click = (Element) => {
    if (Element === "C") {
      setVal("");
    } else if (Element === "=") {
      setVal(eval(calVal));
    } else {
      setVal(calVal + Element);
    }
  };
  return (
    <div className={styles.calculator}>
      <Display val={calVal}></Display>
      <Buttons User_click={User_Click}></Buttons>
    </div>
  );
}

export default App;
